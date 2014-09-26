var ds = require('../lib/ds');

describe('datasource', function() {
    describe('file', function() {
        it('should create readable stream', function() {
            var file = ds.file('log.txt');
        });
    });

    describe('request', function() {
    });
});
