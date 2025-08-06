<?php
/**
 * Renders the Current User Posts custom query block.
 *
 * This file is used as the `render` callback for the block defined in `block.json`.
 * It populates the `author` field in the query dynamically with the current user’s ID
 * before rendering the nested Query Loop block.
 *
 * @package Sagiriswd\CurrentUserPosts
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @global array $attributes Block attributes passed from the block editor.
 * @global WP_Block $block The full parsed block object from the block editor.
 */

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
		<?php

			/**
			 * Get the current user ID.
			 *
			 * @var int $id Current logged-in user ID. 0 if not logged in.
			 */
			$id = get_current_user_id() ?? 0;

			// Show message if no user is logged in.
			if ( 0 === $id ) {
				return esc_html_e('Log in to see your posts', 'current-user-posts' );
			}
			
			// Dynamically inject current user ID into attributes.
			$attributes['currentUserId'] = $id;

			// Set the author ID inside the inner query block.
			$block->parsed_block['innerBlocks'][0]['attrs']['query']['author'] = $id;

			/**
			 * Render each of the inner blocks using render_block().
			 *
			 * @var array $innerBlocks Array of parsed inner block objects.
			 * @var \WP_Block $block Individual block object in loop.
			 */
			$innerBlocks = $block->parsed_block['innerBlocks'];
			foreach( $innerBlocks as $block ) {
				echo render_block($block);
			}
	?>
</div>
