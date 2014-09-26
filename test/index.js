var sinon = require('sinon');
var tran = require('../');
var Rule = require('../lib/rule');
var ds = require('../lib/ds');

describe('application', function() {
    it('should create app', function() {
        var app = tran();
        app.should.be.ok;
    });

    it('should be readable and writable');

    it('should execute middleware on data source event', function() {
        var mw = sinon.spy();
        var app = tran();
        var source = ds.file('log.txt');
        app.src(source);
        app.use(mw);
        mw.called.should.be.true;
    });

    it('should allow multi middleware execution', function() {
        var mw = sinon.spy();
        var app = tran();
        var source = ds.file('log.txt');
        app.src(source);
        app.use(mw, mw);
        app.use(mw);
        mw.calledCount.should.equal(3 * 2); // two line * three mw
    });

    it('should only execute middleware when rule matched', function() {
        var mw = sinon.spy();
        var app = tran();
        var source = ds.file('log.txt');
        var rule = new Rule(/^test/);
        app.src(source);
        app.use(rule, mw);
        mw.calledCount.should.equal(1);
    });
});
