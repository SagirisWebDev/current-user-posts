/**
 * Shared constants for the Current User Posts block.
 *
 * Single source of truth for the variation namespace and default query schema.
 * Imported by edit.js, block-variation, and query-filter.
 *
 * @since 0.1.0
 * @package Sagiriswd\CurrentUserPosts
 */

export const VARIATION_NAMESPACE = 'sagiriswd/current-user-posts-query';

/**
 * Base query schema for the variation.
 *
 * `author` is intentionally empty — callers inject the current user's ID at runtime.
 * `inherit: false` ensures the query uses explicit attributes rather than inheriting
 * from the URL context (e.g. category archive), which would bypass the author filter.
 *
 * @type {Object}
 */
export const DEFAULT_QUERY = {
	perPage: null,
	pages: 0,
	offset: 0,
	postType: 'post',
	order: 'desc',
	orderBy: 'date',
	author: '',
	search: '',
	exclude: [],
	sticky: '',
	inherit: false,
	taxQuery: null,
	parents: [],
	format: [],
};
