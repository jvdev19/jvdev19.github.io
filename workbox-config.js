module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,svg,jpg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};