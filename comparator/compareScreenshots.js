const { readFileSync, writeFileSync, readdirSync } = require('fs');
const compareImages = require('resemblejs/compareImages');

module.exports.compareScreenshots = async () => {
    let resultInfo = [];
    let browsers = readdirSync(options.assets);
    for await (browser of browsers) {
        let folders = readdirSync(`${options.assets}/${browser}`);
        for await (folder of folders) {
            const data = await compareImages(
                readFileSync(`${options.assets}/${browser}/${folder}/before.png`),
                readFileSync(`${options.assets}/${browser}/${folder}/after.png`),
                options
            );
            writeFileSync(`${options.assets}/${browser}/${folder}/result.png`, data.getBuffer());
            resultInfo.push({
                browser,
                before: `.${options.assets}/${browser}/${folder}/before.png`,
                after: `.${options.assets}/${browser}/${folder}/after.png`,
                result: `.${options.assets}/${browser}/${folder}/result.png`,
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            });
        }
    }

    return resultInfo;
};