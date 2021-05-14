const { writeFileSync } = require('fs');

global.options = require('./resemble-options.json');

const compareScreenshots = require('./compareScreenshots').compareScreenshots;
const createReport = require('./htmlGenerator').createReport;

(async function generateReport() {
    let result = await compareScreenshots();
    let dateTime = new Date().toISOString();
    writeFileSync(`./comparator/report.html`, createReport(dateTime, result));
})();