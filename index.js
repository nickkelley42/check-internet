#!/usr/bin/env node

const ping = require('ping');

async function check_connection() {
	const hosts = [
		'localhost',
		'192.168.1.1',
		'8.8.8.8',
		'xkcd.com',
	];
	const resultsPromises = hosts.map(host => ping.promise.probe(host));
	const results = await Promise.all(resultsPromises);
	const success = results.every(res => res.alive);
	if (!success) {
		process.exitCode = 1;
		for (let result of results) {
			let status = result.alive ? 'success' : 'fail';
			console.log(`${result.host}: ${status}`);
		}
	}
}

if (require.main === module) {
	check_connection();
}

module.exports = check_connection;
