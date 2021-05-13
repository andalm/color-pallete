const numColors = 5;

function randomPalette() {
    const dist = 360 / numColors;
    const saturation = Math.random() * 1;
    const brightness = Math.random() * 1;
    let newColor = Math.ceil(Math.random() * 359);
    let colors = [];
    while(colors.length < numColors) {
        colors.push([newColor, saturation, brightness]);
        newColor = (newColor + dist) % 360;
    }

    return colors;
}

function generateRules() {
    let colors = randomPalette();
    let htmlColors = document.querySelectorAll('div.color-view');
    let rgbStrings = [];
    for(let [i, color] of colors.entries()) {
        let rgb = hsvToRgb(color[0]/360, color[1], color[2]);
        let rgbString = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        htmlColors[i].style.backgroundColor = rgbString;
        rgbStrings.push(rgbString);
    }
    document.getElementById('css-rules').innerHTML = `
        .website-background{ color: ${rgbStrings[0]};}
        .element-text{ color: ${rgbStrings[1]};}
        .element-border{ border-color: ${rgbStrings[2]};}
        .element-background{ background-color: ${rgbStrings[3]};}
        .header{ color: ${rgbStrings[4]};}
    `;
}

function clean() {
    let htmlColors = document.querySelectorAll('div.color-view');
    htmlColors.forEach(element => element.style.backgroundColor = '#FFFFFF');
    document.getElementById('css-rules').innerHTML = `
        .website-background{ color: #FFFFFF;}
        .element-text{ color: #FFFFFF;}
        .element-border{ border-color: #FFFFFF;}
        .element-background{ background-color: #FFFFFF;}
        .header{ color: #FFFFFF;}
    `;
}