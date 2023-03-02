import { registerBlockType } from '@wordpress/blocks';
import './team-member';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from '../block.json';

registerBlockType(metadata.name, {
	edit: Edit,
	save,
});
