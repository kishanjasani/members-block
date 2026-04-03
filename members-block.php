<?php
/**
 * Plugin Name:       Team Members
 * Description:       A Team Members block.
 * Plugin URI:        https://github.com/kishanjasani/members-block
 * Requires at least: 6.0
 * Requires PHP:      8.0
 * Version:           1.0.0
 * Author:            Kishan Jasani
 * Author URI:        https://profiles.wordpress.org/kishanjasani
 * License:           GPL-3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       team-members
 *
 * @package team-members
 */

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

define( 'TEAM_MEMBERS_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'TEAM_MEMBERS_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

function team_members_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'team_members_block_init' );
