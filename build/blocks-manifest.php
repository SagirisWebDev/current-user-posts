<?php
// This file is generated. Do not modify it manually.
return array(
	'current-user-posts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'sagiriswd/current-user-posts',
		'version' => '0.1.0',
		'title' => 'Current User Posts',
		'category' => 'theme',
		'icon' => 'admin-users',
		'description' => 'Display the posts created by the current user.',
		'allowedBlocks' => array(
			'core/query'
		),
		'attributes' => array(
			'currentUserId' => array(
				'type' => 'integer',
				'default' => 0
			),
			'namespace' => array(
				'type' => 'string',
				'default' => 'sagiriswd/current-user-posts'
			)
		),
		'supports' => array(
			'html' => false,
			'layout' => true,
			'align' => true,
			'ariaLabel' => true
		),
		'keywords' => array(
			'my posts',
			'current user posts'
		),
		'textdomain' => 'current-user-posts',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
