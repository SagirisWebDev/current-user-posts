<?php
/**
 * Current User Posts
 *
 * @package           Sagiriswd\CurrentUserPosts
 * @author            Tiegan Benson
 * @copyright         Sagiris Web Development 2025
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Current User Posts
 * Description:       Display the posts created by the current user.
 * Version:           0.2.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Sagiris Web Development
 * Author URI:        https://sagirisdev.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Domain Path:       /languages
 * Text Domain:       current-user-posts
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/includes/class-plugin.php';

( new Sagiriswd\CurrentUserPosts\Plugin( __FILE__ ) )->boot();
