module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.css'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};