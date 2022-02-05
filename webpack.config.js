const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'block-one': '/include/block-editor/blocks/block-one',
		'block-two': '/include/block-editor/blocks/block-two',
		'block-three': '/include/block-editor/blocks/block-three'
	}
};