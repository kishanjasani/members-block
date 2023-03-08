import { isBlobURL } from '@wordpress/blob';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = (props) => {
	const { attributes, setAttributes } = props;
	const { alt, url } = attributes;

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};
	return (
		<InspectorControls>
			<PanelBody title={__('Image Settings', 'team-members')}>
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
