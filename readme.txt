=== Current User Posts ===
Contributors:      sagirisdev
Tags:              block, query, current user, user posts, members
Tested up to:      7.0
Requires at least: 6.7
Requires PHP:      7.4
Stable tag:        0.2.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Display posts created by the currently logged-in user using a Query Loop variation, scoped automatically to the viewer.

== Description ==

Current User Posts lets you display posts created by the logged in user automatically in a block theme.

This block is essential for creating member's only areas on your website. Displaying the posts of the current user dynamically is an industry-standard feature of online membership systems, and Current User Posts brings that to the Block Editor.

== Installation ==

- Upload the plugin files to the `/wp-content/plugins/current-user-posts` directory, or install the plugin through the WordPress plugins screen directly.

== Usage ==

A valid user id is required for this block to work, so it must be placed in a context that is only available to logged in users.

Only logged in users should be able to see the block.

== Frequently Asked Questions ==

= I see my posts show up in the block editor instead of the user's. =

That means the block is working. Since you are the current user when working in the block editor, your posts will be displayed in the block. When another user logs in and views the block, they will see posts they created.

= Can I add, remove, or rearrange the inner blocks? =

The block supports ONLY one instance of the Query Loop block inside of it. However, you can change the blocks inside of the inner Query Loop block.

= I've inserted the block onto my page, but I'm not seeing my posts. =

Make sure you have posts of the selected post type to display. If your selected pattern doesn't contain a no-results block, you will not see a message alerting you that there aren't any posts of that post type to display.

= The block says I need to log in to see my posts. =

This block is only meant to be seen by registered users of the website, i.e. they must be a WordPress user with a valid user account. Any visitor to the website who isn't logged in to an account will not be able to see posts in the block. The block should only be visible to users after they have logged in.

== Screenshots ==

1. A rudimentary example of the Current User Posts block against the Query Loop block.
2. Using the block in the editor.

== Changelog ==

= 0.2.0 =
* Fix: block now returns complete markup when no user is logged in (previously left an unclosed `<div>`).
* Fix: PHP parse error caused by Unicode smart quotes in the main plugin file.
* Fix: editor warning caused by React hooks being called conditionally in the query filter.
* Fix: `setAttributes` is no longer called during render; the author sync now runs inside an effect.
* Fix: the inner Query Loop's `inherit` default is now `false` everywhere, so the author filter is never bypassed by archive context.
* Fix: namespace resolution error for `WP_Block` in the render path.
* Improvement: refactored into separate Plugin, Block_Registrar, and Block_Renderer classes.
* Improvement: uses the optimised block registration APIs on WordPress 6.7+ and 6.8+, with a fallback loop for earlier versions.

= 0.1.0 =
* Initial release.

== Upgrade Notice ==

= 0.2.0 =
Bug fixes and an internal refactor. Recommended for all users.

== Donate ==

https://sagirisdev.com/donate
