<?php
/**
 * Render callback for the Current User Posts block.
 *
 * WordPress provides $attributes, $content, and $block before including this file.
 *
 * @package Sagiriswd\CurrentUserPosts
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Serialized inner block HTML.
 * @var WP_Block $block      The current block instance.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Sagiriswd\CurrentUserPosts\Block_Renderer;

require_once dirname( __DIR__, 2 ) . '/includes/class-block-renderer.php';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Block_Renderer::render() returns HTML composed from get_block_wrapper_attributes(), esc_html__(), and render_block() (WordPress core's trusted block renderer). The return value is intentionally HTML and must not be passed through esc_html().
echo ( new Block_Renderer() )->render( $attributes, $content, $block );
