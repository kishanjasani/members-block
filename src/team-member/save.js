import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { name, bio } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="h3" value={name} />
			<RichText.Content tagName="p" value={bio} />
		</div>
	);
}
