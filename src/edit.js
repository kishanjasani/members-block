import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
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
