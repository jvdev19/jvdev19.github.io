module.exports = {
	globDirectory: 'jv-test/pwa',
	globPatterns: [
		'**/*.{png,html}'
	],
	swDest: 'jv-test/pwa/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};