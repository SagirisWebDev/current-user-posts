<?php
/**
 * @package Sagiriswd\CurrentUserPosts
 */

namespace Sagiriswd\CurrentUserPosts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_Block;

class Block_Renderer {

	public function render( array $attributes, string $content, WP_Block $block ): string {
		$user_id = get_current_user_id();

		if ( 0 === $user_id ) {
			return sprintf(
				'<div %s><p>%s</p></div>',
				get_block_wrapper_attributes(),
				esc_html__( 'Log in to see your posts', 'current-user-posts' )
			);
		}

		if ( empty( $block->parsed_block['innerBlocks'] ) ) {
			return sprintf( '<div %s></div>', get_block_wrapper_attributes() );
		}

		$block->parsed_block['innerBlocks'][0]['attrs']['query']['author'] = $user_id;

		$inner_html = '';
		foreach ( $block->parsed_block['innerBlocks'] as $inner_block ) {
			$inner_html .= render_block( $inner_block );
		}

		return sprintf(
			'<div %s>%s</div>',
			get_block_wrapper_attributes(),
			$inner_html
		);
	}
}
