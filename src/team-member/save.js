import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

export default function save({ attributes }) {
	const { name, bio, id, alt, url, socialLinks } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<img
					src={url}
					alt={alt}
					className={id ? `wp-image-${id}` : `wp-image-ext`}
				/>
			)}
			{name && <RichText.Content tagName="h3" value={name} />}
			{bio && <RichText.Content tagName="p" value={bio} />}
			{socialLinks.length > 0 && (
				<div className="wp-block-kishanjasani-team-member-social-links">
					<ul>
						{socialLinks.map((item, index) => {
							return (
								<li key={index} data-icon={item.icon}>
									<a
										href={item.link}
										target="_blank"
										rel="noreferrer noopener"
										aria-label={`${item.icon} Link`}
									>
										<Icon
											icon={item.icon}
											aria-hidden={true}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
