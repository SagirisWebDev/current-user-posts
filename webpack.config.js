const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

const extraEntries = {
	'block-variation/index': './src/block-variation/index.js',
	'query-filter/index': './src/query-filter/index.js',
};

module.exports = {
	...defaultConfig,
	entry: async () => {
		const entries = typeof defaultConfig.entry === 'function'
			? await defaultConfig.entry()
			: defaultConfig.entry;
		return { ...entries, ...extraEntries };
	},
};
