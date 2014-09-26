var rule = require('../lib/rule');
var sinon = require('sinon');

describe('rule', function() {
    it('should have method test', function() {
        var r = rule.regex();
        r.test.should.be.type('function');
    });

    describe('regex', function() {
        it('should check if regular expression match', function() {
            var spy = sinon.spy();
            var r = new rule.regex(/^test/);
            var valid = 'test line';
            var invalid = '2test line';
            r.test(valid).should.be.true;
            r.test(invalid).should.be.false;
        });
    });
});
