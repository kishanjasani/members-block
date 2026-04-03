import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = (props) => {
	const { attributes, setAttributes } = props;
	const { columns } = attributes;

	const onChangeColumn = (newColumns) => {
		setAttributes({ columns: newColumns });
	};
	return (
		<InspectorControls>
			<PanelBody title={__('Team member columns', 'team-members')}>
				<RangeControl
					label={__('Columns', 'team-members')}
					min={1}
					max={6}
					value={columns}
					onChange={onChangeColumn}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
