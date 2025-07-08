/**
 * Main entry point for the block.
 *
 * This file registers the block using metadata and ties together
 * the `edit` and `save` components. It also imports editor and
 * front-end styles.
 * 
 * @author Sagiris Web Development
 * @since 0.1.0
 * @file Main entry point for the block
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @namespace sagiriswd.currentUserPosts
 */
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/}
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see {@link https://www.npmjs.com/package/@wordpress/scripts#using-css}
 */
import './style.scss';

/*
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save
} );
