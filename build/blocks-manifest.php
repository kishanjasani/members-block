<?php
// This file is generated. Do not modify it manually.
return array(
	'team-member' => array(
		'$schema' => 'https://json.schemastore.org/block.json',
		'apiVersion' => 3,
		'name' => 'kishanjasani/team-member',
		'title' => 'Team Member',
		'category' => 'widgets',
		'icon' => 'admin-users',
		'description' => 'A team member item',
		'keywords' => array(
			'Team',
			'Member'
		),
		'parent' => array(
			'kishanjasani/team-members'
		),
		'supports' => array(
			'reusable' => false,
			'html' => false
		),
		'attributes' => array(
			'name' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h3'
			),
			'bio' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			),
			'id' => array(
				'type' => 'number'
			),
			'alt' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'img',
				'attribute' => 'alt',
				'default' => ''
			),
			'url' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'img',
				'attribute' => 'src'
			),
			'socialLinks' => array(
				'type' => 'array',
				'source' => 'query',
				'selector' => '.wp-block-kishanjasani-team-member-social-links li',
				'query' => array(
					'icon' => array(
						'source' => 'attribute',
						'attribute' => 'data-icon'
					),
					'link' => array(
						'selector' => 'a',
						'source' => 'attribute',
						'attribute' => 'href'
					)
				),
				'default' => array(
					array(
						'icon' => 'facebook',
						'link' => 'https://facebook.com'
					),
					array(
						'icon' => 'twitter',
						'link' => 'https://twitter.com'
					)
				)
			)
		),
		'textdomain' => 'team-members',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'team-members' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kishanjasani/team-members',
		'version' => '0.1.0',
		'title' => 'Team Members',
		'category' => 'widgets',
		'icon' => 'groups',
		'description' => 'A team members block.',
		'keywords' => array(
			'Team',
			'Members',
			'Grid'
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 2
			)
		),
		'textdomain' => 'team-members',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
