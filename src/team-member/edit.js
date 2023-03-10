import { useEffect, useState, useRef } from '@wordpress/element';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import {
	Spinner,
	withNotices,
	ToolbarButton,
	Icon,
	Tooltip,
} from '@wordpress/components';
import { usePrevious } from '@wordpress/compose';
import Inspector from './inspector';

function Edit(props) {
	const {
		attributes,
		setAttributes,
		noticeOperations,
		noticeUI,
		isSelected,
	} = props;
	const { name, bio, id, alt, url, socialLinks } = attributes;

	const [blobURL, setBlobURL] = useState();
	const titleRef = useRef();
	const previousUrl = usePrevious(url);

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

	const removeImage = () => {
		setAttributes({ id: undefined, alt: '', url: undefined });
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({ alt: '', url: undefined });
		}
	}, []);

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL();
		}
	}, [url]);

	useEffect(() => {
		if (url && !previousUrl) {
			titleRef.current.focus();
		}
	}, [url, previousUrl]);

	return (
		<>
			<Inspector {...props} />
			{url && (
				<BlockControls>
					<MediaReplaceFlow
						name={__('Replace', 'team-members')}
						onSelect={onSelectImage}
						onSelectURL={onSelectImageUrl}
						onError={onUploadError}
						accept="image/*"
						allowedTypes={['image']}
						mediaId={id}
						mediaURL={url}
					/>
					<ToolbarButton onClick={removeImage}>
						{__('Remove Image', 'team-members')}
					</ToolbarButton>
				</BlockControls>
			)}
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
					ref={titleRef}
				/>
				<RichText
					placeholder={__('Member Bio', 'team-members')}
					tagName="p"
					value={bio}
					onChange={onChangeBio}
				/>
				<div className="wp-block-kishanjasani-team-member-social-links">
					<ul>
						{socialLinks.map((item, index) => {
							return (
								<li key={index}>
									<Icon icon={item.icon} />
								</li>
							);
						})}
						{isSelected && (
							<li className="wp-block-kishanjasani-team-member-add-icon">
								<Tooltip
									text={__('Add Social Link', 'team-members')}
								>
									<button
										aria-label={__(
											'Add Social Link',
											'team-members'
										)}
									>
										<Icon icon="plus" />
									</button>
								</Tooltip>
							</li>
						)}
					</ul>
				</div>
			</div>
		</>
	);
}

export default withNotices(Edit);
