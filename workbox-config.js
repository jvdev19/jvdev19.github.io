module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,svg,js,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};