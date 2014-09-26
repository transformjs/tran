var tool = require('./tool');

function RegexRule(regex) {
    if (typeof regex === 'string') {
        regex = new RegExp(regex, arguments[1]);
    }
    this.regex = regex;
}

RegexRule.prototype.test = function(data) {
    return this.regex.test(data);
};

module.exports = {
    regex: tool.generator(RegexRule)
};
