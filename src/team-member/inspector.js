import { isBlobURL } from '@wordpress/blob';
import {
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextareaControl,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

const Inspector = (props) => {
	const { attributes, setAttributes } = props;
	const { id, alt, url } = attributes;

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};

	const imgObject = useSelect(
		(select) => {
			const { getMedia } = select('core');
			return id ? getMedia(id) : null;
		},
		[id]
	);

	const imgSizes = useSelect((select) => {
		return select(blockEditorStore).getSettings().imageSizes;
	}, []);

	const getImageSizeOptions = () => {
		if (!imgObject) {
			return [];
		}

		const options = [];
		const sizes = imgObject.media_details.sizes;

		for (const key in sizes) {
			const size = sizes[key];
			const imageSize = imgSizes.find((s) => s.slug === key);
			if (imageSize) {
				options.push({
					label: imageSize.name,
					value: size.source_url,
				});
			}
		}
		return options;
	};

	const onChangeImageSize = (newUrl) => {
		setAttributes({ url: newUrl });
	};

	return (
		<InspectorControls>
			<PanelBody title={__('Image Settings', 'team-members')}>
				{id && (
					<SelectControl
						label={__('Image Sizes', 'team-members')}
						options={getImageSizeOptions()}
						value={url}
						onChange={onChangeImageSize}
					/>
				)}
				{url && !isBlobURL(url) && (
					<TextareaControl
						label={__('Alt Text', 'team-members')}
						value={alt}
						onChange={onChangeAlt}
						help={__(
							'Alternative text describes your image to people can not seeit. Add a short description with its key details.',
							'team-members'
						)}
					/>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
