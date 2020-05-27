const qunit = require('qunit');
const app = require('./index');

class MockPing {
	constructor() {
		this.promise = {
			probe(host) {
				return Promise.resolve('done');
			},
		};
	}
}

qunit.test('it exports a function when not run as main', function(assert) {
	assert.equal(typeof app, 'function');
});


// skipping this for now; I'm not sure how to 
// effectively mock the ping package yet.
qunit.skip('it pings hosts', function(assert) {
	assert.expect(1);
	const ping = {
		promise: {
			probe(host) {
				assert.step('calls probe with a host');
				return Promise.resolve();
			},
		},
	};
	app();

	assert.verifySteps(['calls probe with a host']);
});
