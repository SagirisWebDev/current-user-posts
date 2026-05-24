<?php
/**
 * @package Sagiriswd\CurrentUserPosts
 */

namespace Sagiriswd\CurrentUserPosts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the block type(s) from the build manifest, with fallbacks for WP 6.7 and earlier.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
class Block_Registrar {

	private string $build_dir;
	private string $manifest;

	public function __construct( string $build_dir ) {
		$this->build_dir = $build_dir;
		$this->manifest  = $build_dir . '/blocks-manifest.php';
	}

	public function register(): void {
		if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
			wp_register_block_types_from_metadata_collection( $this->build_dir, $this->manifest );
			return;
		}

		if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
			wp_register_block_metadata_collection( $this->build_dir, $this->manifest );
		}

		$manifest_data = require $this->manifest;
		foreach ( array_keys( $manifest_data ) as $block_type ) {
			register_block_type( $this->build_dir . "/{$block_type}" );
		}
	}
}
