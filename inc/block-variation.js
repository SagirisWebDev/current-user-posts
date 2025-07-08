/**
 * Query Block Variation
 * 
 * We use the block variation api to remove the author controls
 * of the block supports of the nested query block and
 * reference it in the query reset and the block edit function.
 * 
 * @since 0.1.0
 * @file Query Block Variation
 * @author Sagiris Web Development
 * @namespace sagiriswd.currentUserPosts
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/
 * 
 */

wp.domReady( () => {

	/**
	 * The unique namespace identifier for this variation.
	 *
	 * @constant {string}
	 * @memberof sagiriswd.currentUserPosts
	 */
	const VARIATION_NAME = 'sagiriswd/current-user-posts-query';

	/**
	 * Registers a Query Loop block variation that filters posts
	 * by the currently logged-in user.
	 *
	 * @function registerCurrentUserPostsQuery
	 * @memberof sagiriswd.currentUserPosts
	 *
	 * @borrows wp.blocks.registerBlockVariation as registerBlockVariation
	 *
	 * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/}
	 */
  wp.blocks.registerBlockVariation( 'core/query', {
    name: VARIATION_NAME,
    title: 'CUP Query',
    description: 'A query loop block that displays the posts created by the current user.',
    isActive: [ 'namespace' ],
    icon: 'list-view',
    attributes: {
      namespace: VARIATION_NAME,
      query: {
				perPage: null,
				pages: 0,
				offset: 0,
				postType: 'post',
				order: 'desc',
				orderBy: 'date',
				author: '', // Populated dynamically in filter/edit callback
				search: '',
				exclude: [],
				sticky: '',
				inherit: false,
      },
    },
		innerBlocks: [
			[
				'core/post-template',
				{},
				[
					[ 'core/post-featured-image', {} ],
					[ 'core/post-title', { placeholder: 'Post Title' } ],
					[ 'core/post-excerpt', { placeholder: 'Post Excerpt' } ],
					[ 'core/post-date', { placeholder: 'Post Date' } ]
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
    ]
  } );
} );
