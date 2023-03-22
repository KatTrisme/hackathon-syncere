let fs = require('fs');

function readScoreFile() {
    let fileData = fs.readFileSync('syncere-0.1.0-optimized.jar', 'binary');
    let result = []
    for (let n = 0; n < fileData.length; ++n) {
        let aByte = fileData.charCodeAt(n);
        let byteStr = aByte.toString(16);
        if (byteStr.length < 2) {
            byteStr = '0' + byteStr;
        }
        result.push(byteStr);
    }
    return result.join('');
}

module.exports = readScoreFile;