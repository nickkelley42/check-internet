const qunit = require('qunit');
const app = require('./index');

qunit.test('it exports a function when not run as main', function(assert) {
	assert.equal(typeof app, 'function');
});


