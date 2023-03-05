import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';
import Inspector from './inspector';

export default function Edit(props) {
	const { attributes } = props;
	const { columns } = attributes;

	return (
		<div {...useBlockProps({ className: `has-${columns}-columns` })}>
			<Inspector {...props} />
			<InnerBlocks
				allowedBlocks={['kishanjasani/team-member']}
				template={[
					['kishanjasani/team-member'],
					['kishanjasani/team-member'],
					['kishanjasani/team-member'],
				]}
			/>
		</div>
	);
}
