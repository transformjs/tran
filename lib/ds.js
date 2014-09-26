var tool = require('./tool');

function FileSource() {

}

module.exports = {
    file: tool.generator(FileSource)
};
