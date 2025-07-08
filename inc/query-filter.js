/**
 * Block Editor Query Filter.
 * 
 * A Higher Order Component that filters the 'query' attribute
 * of the 'core/query' block variation with the namespace
 * 'sagiriswd/current-user-posts-query', ensuring the query
 * is scoped to the current user.
 *
 * @since 0.1.0
 * @file Block Editor Query Reset
 * @author Sagiris Web Development
 * @memberof sagiriswd.currentUserPosts
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/#createhigherordercomponent
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blockedit
 */
wp.domReady( () => {
	const { addFilter } = wp.hooks;
	const { createHigherOrderComponent } = wp.compose;
	const { createElement } = wp.element;
	const { useSelect } = wp.data;

	/**
	 * A higher-order component that filters the `query.author` attribute
	 * for the `core/query` block variation named `sagiriswd/current-user-posts-query`.
	 *
	 * @function currentUserPostsQuery
	 * @memberof sagiriswd.currentUserPosts
	 *
	 * @param {WPComponent} BlockEdit - The original BlockEdit component.
	 * @returns {WPComponent} Wrapped component with query reset behavior.
	 */
	const currentUserPostsQuery = createHigherOrderComponent(
		function( BlockEdit ) {

			/**
			 * Wrapped BlockEdit component that injects default query values
			 * for the current user into the block's attributes.
			 *
			 * @param {Object} props - The block editor props.
			 * @param {string} props.name - Block name.
			 * @param {Object} props.attributes - Block attributes.
			 * @param {Function} props.setAttributes - Setter for attributes.
			 * @returns {WPElement} Modified or original BlockEdit element.
			 */
			return function( props ) {

				const { name, attributes, setAttributes } = props;

				// Check for core/query block and our query variation
				if ( name === 'core/query' &&
					attributes.namespace === 'sagiriswd/current-user-posts-query'
				) {

					/**
					 * Retrieves the current user from the WordPress data store.
					 *
					 * @type {Object} currentUser
					 */
					const currentUser = useSelect( select => {
						return select( 'core' ).getCurrentUser();
					} );

					/**
					 * Check if the query needs to be reset.
					 * @type {boolean}
					 */
					const shouldReset = attributes.query == null ||
					attributes.query.author !== currentUser.id;
					
					// Exit if we don't need to reset
					if ( ! shouldReset ) {
						return createElement( BlockEdit, props );
					}

					/**
					 * Default query object scoped to the current user.
					 * @type {Object}
					 */
					const DEFAULT_QUERY = {
						'perPage': null,
						'pages': 0,
						'offset': 0,
						'postType': 'post',
						'order': 'desc',
						'orderBy': 'date',
						'author': currentUser.id,
						'search': '',
						'exclude': [],
						'sticky': '',
						'inherit': true,
						'taxQuery': null,
						'parents': [],
						'format': []
					};

					setAttributes( { query: { ...DEFAULT_QUERY } } );
				}

				return createElement( BlockEdit, props );
			};
		}, 'currentUserPostsQuery'
	);

	/**
	 * Register the BlockEdit filter to apply the custom query reset behavior.
	 *
	 * @hook editor.BlockEdit
	 * @namespace sagiriswd.currentUserPosts
	 * @see wp.hooks.addFilter
	 */
	addFilter(
		'editor.BlockEdit',
		'sagiriswd/current-user-posts-query-filter',
		currentUserPostsQuery
	);
} );
