import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { Spinner, withNotices } from '@wordpress/components';

function Edit({ attributes, setAttributes, noticeOperations, noticeUI }) {
	const { name, bio, alt, url } = attributes;

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};

	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	const onSelectImage = (newImg) => {
		if (!newImg || !newImg.url) {
			setAttributes({ id: undefined, alt: '', url: undefined });
			return;
		}

		setAttributes({ id: newImg.id, alt: newImg.alt, url: newImg.url });
	};

	const onSelectImageUrl = (newImgUrl) => {
		setAttributes({ id: undefined, alt: '', url: newImgUrl });
	};

	const onUploadError = (message) => {
		noticeOperations.removeAllNotices(message);
		noticeOperations.createErrorNotice(message);
	};

	return (
		<div {...useBlockProps()}>
			{url && (
				<div
					className={`wp-block-kishanjasani-team-member-img${
						isBlobURL(url) ? ' is-loading' : ''
					}`}
				>
					<img alt={alt} src={url} />
					{isBlobURL(url) && <Spinner />}
				</div>
			)}
			<MediaPlaceholder
				icon="admin-users"
				onSelect={onSelectImage}
				onSelectURL={onSelectImageUrl}
				onError={onUploadError}
				allowedTypes={['image']}
				disableMediaButtons={url}
				notices={noticeUI}
			/>
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

export default withNotices(Edit);
