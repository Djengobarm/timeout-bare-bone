var assert = require('assert');
var timeout = require('../timeout.js');

describe('timeout', function() {
    it('should time out when t < 100', function(done) {
        const t = timeout.timeout(timeout.sleep(100), 20);
        t.then((result) => {
            assert.equal(result, 'timed out');
            done();
        });
    });

    it('should not time out when t > 100', function(done) {
        const t = timeout.timeout(timeout.sleep(100), 200);

        t.then((result) => {
            assert.equal(typeof result, 'undefined');
            done();
        });
    });
});