import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { name, bio, id, alt, url } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<img
					src={url}
					alt={alt}
					className={id ? `wp-image-${id}` : `wp-image-ext`}
				/>
			)}
			<RichText.Content tagName="h3" value={name} />
			<RichText.Content tagName="p" value={bio} />
		</div>
	);
}
