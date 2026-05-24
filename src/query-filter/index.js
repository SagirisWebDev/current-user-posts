/**
 * Block Editor Query Filter
 *
 * A Higher Order Component that filters the `query` attribute of the
 * core/query block variation identified by VARIATION_NAMESPACE, ensuring
 * the author field is always scoped to the current user.
 *
 * @since 0.1.0
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/#createhigherordercomponent
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blockedit
 */

import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { createElement, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { VARIATION_NAMESPACE, DEFAULT_QUERY } from '../current-user-posts/constants';

/**
 * Returns true when the HOC should manage this block's query.
 *
 * Pure function — no store access, no side effects. Testable in isolation.
 *
 * @param {string} name       Block name.
 * @param {Object} attributes Block attributes.
 * @returns {boolean}
 */
function shouldApplyFilter( name, attributes ) {
	return name === 'core/query' && attributes.namespace === VARIATION_NAMESPACE;
}

/**
 * Syncs the block's query.author to the current user's ID whenever the user
 * resolves or isVariation changes. No-ops when the author is already correct.
 *
 * Must be called unconditionally (Rules of Hooks) — isVariation guards the
 * side effect internally so it is a no-op for all other block types.
 *
 * @param {boolean}  isVariation
 * @param {Object}   attributes
 * @param {Function} setAttributes
 */
function useCurrentUserQuery( isVariation, attributes, setAttributes ) {
	const currentUser = useSelect( ( select ) => {
		return isVariation ? select( 'core' ).getCurrentUser() : null;
	} );

	useEffect( () => {
		if ( ! isVariation || ! currentUser?.id ) {
			return;
		}
		if ( attributes.query?.author === currentUser.id ) {
			return;
		}
		setAttributes( { query: { ...DEFAULT_QUERY, author: currentUser.id } } );
	// attributes intentionally omitted: re-running on every attribute change
	// would create a loop. We only need to sync when the resolved user changes.
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ isVariation, currentUser?.id ] );
}

const currentUserPostsQuery = createHigherOrderComponent(
	function( BlockEdit ) {
		return function( props ) {
			const { name, attributes, setAttributes } = props;
			const isVariation = shouldApplyFilter( name, attributes );

			useCurrentUserQuery( isVariation, attributes, setAttributes );

			return createElement( BlockEdit, props );
		};
	},
	'currentUserPostsQuery'
);

addFilter(
	'editor.BlockEdit',
	'sagiriswd/current-user-posts-query-filter',
	currentUserPostsQuery
);
