import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { name, bio } = attributes;

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};

	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	return (
		<div {...useBlockProps()}>
			<RichText
				placeholder={__('Member Name', 'team-members')}
				tagName="h3"
				value={name}
				onChange={onChangeName}
			/>
			<RichText
				placeholder={__('Member Bio', 'team-members')}
				tagName="p"
				value={bio}
				onChange={onChangeBio}
			/>
		</div>
	);
}
