<?php
/**
 * @package Sagiriswd\CurrentUserPosts
 */

namespace Sagiriswd\CurrentUserPosts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/class-block-registrar.php';

class Plugin {

	const VERSION = '0.2.0';

	private string $dir;
	private string $url;

	public function __construct( string $file ) {
		$this->dir = plugin_dir_path( $file );
		$this->url = plugin_dir_url( $file );
	}

	public function boot(): void {
		add_action( 'init', [ $this, 'register_blocks' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_assets' ] );
	}

	public function register_blocks(): void {
		( new Block_Registrar( $this->dir . 'build' ) )->register();
	}

	/**
	 * Enqueues editor-only scripts for the block variation and query filter.
	 *
	 * Dependencies and version hashes are read from the .asset.php files generated
	 * by webpack at build time.
	 *
	 * @since 0.1.0
	 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blockedit
	 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/
	 */
	public function enqueue_editor_assets(): void {
		$filter_asset = require $this->dir . 'build/query-filter/index.asset.php';
		wp_enqueue_script(
			'sagiriswd-current-user-posts-query-filter',
			$this->url . 'build/query-filter/index.js',
			$filter_asset['dependencies'],
			$filter_asset['version'],
			true
		);

		$variation_asset = require $this->dir . 'build/block-variation/index.asset.php';
		wp_enqueue_script(
			'sagiriswd-current-user-posts-query-variation',
			$this->url . 'build/block-variation/index.js',
			$variation_asset['dependencies'],
			$variation_asset['version'],
			true
		);
	}
}
