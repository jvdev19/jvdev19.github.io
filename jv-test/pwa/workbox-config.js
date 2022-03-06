module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};