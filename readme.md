# Current User Posts

## Description

Current User Posts lets you display posts created by the logged in user automatically in a block theme.

This block is essential for creating member's only areas on your website. Displaying the posts of the current user dynamically is an industry-standard feature of online membership sytems, and Current User Posts brings that to the Block Editor.

## Installation

- Upload the plugin files to the `/wp-content/plugins/current-user-posts` directory, or install the plugin through the WordPress plugins screen directly.

## Usage 

A valid user id is required for this block to work, so it must be placed in a context that is only available to logged in users, i.e. only logged in users should be able to see the block.

## Frequently Asked Questions 

### I see my posts show up in the block editor instead of the user's.

That means the block is working. Since you are the current user when working in the block editor, your posts will be displayed in the block. When another user logs in and views the block, they will see posts they created.

### Can I add, remove, or rearrange the inner blocks?

Yes, any inner blocks supported by the query loop block are supported by the block.

### I've inserted the block onto my page, but I'm not seeing my posts.

Make sure you have posts of the selected post type to display. If you're selected pattern doesn't contain a no-results block, you will not see a message alerting you that there aren't any posts of that post type to display.

### The block says I need to log in to see my posts.

This block is only meant to be seen by registered users of the website, i.e. they must be a Wordpress user with a valid user account. Any visitor to the website who isn't logged in to an account will not be able to see posts in the block.
**The block should only be visible to users after they have logged in.**

## Screenshots 

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

## Changelog 

- 0.1.0 - Release
