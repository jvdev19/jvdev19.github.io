module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,js,json}'
	],
	swDest: '/jv-test/pwa/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};