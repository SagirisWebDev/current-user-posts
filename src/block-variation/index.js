/**
 * Query Block Variation
 *
 * Registers a core/query block variation that removes author controls
 * and references VARIATION_NAMESPACE as the identifier for the query
 * reset filter and block edit function.
 *
 * @since 0.1.0
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/
 */

import { registerBlockVariation } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import { __ } from '@wordpress/i18n';
import { VARIATION_NAMESPACE, DEFAULT_QUERY } from '../current-user-posts/constants';

domReady( () => {
	registerBlockVariation( 'core/query', {
		name: VARIATION_NAMESPACE,
		title: __( 'CUP Query', 'current-user-posts' ),
		description: __(
			'A query loop block that displays the posts created by the current user.',
			'current-user-posts'
		),
		isActive: [ 'namespace' ],
		icon: 'list-view',
		attributes: {
			namespace: VARIATION_NAMESPACE,
			query: { ...DEFAULT_QUERY },
		},
		innerBlocks: [
			[
				'core/post-template',
				{},
				[
					[ 'core/post-featured-image', {} ],
					[ 'core/post-title', { placeholder: __( 'Post Title', 'current-user-posts' ) } ],
					[ 'core/post-excerpt', { placeholder: __( 'Post Excerpt', 'current-user-posts' ) } ],
					[ 'core/post-date', { placeholder: __( 'Post Date', 'current-user-posts' ) } ],
				],
			],
			[ 'core/query-pagination' ],
			[ 'core/query-no-results' ],
		],
		scope: [ 'block' ],
		allowedControls: [
			'inherit',
			'postType',
			'order',
			'sticky',
			'taxQuery',
			'search',
			'format',
			'parents',
			// author controls removed
		],
	} );
} );
