import React, { ReactNode } from 'react';
import Image from 'next/image';
import { classnames, RenderIf } from "@src/components";
import styles from './styles.module.scss';

type BadgeType = 'simple' | 'custom';

type AnchorPoints = {
	horizontal: 'left' | 'center' | 'right';
	vertical: 'top' | 'middle' | 'bottom';
}

type AvatarBadge = {
	model?: BadgeType;
	customComponent?: ReactNode;
	anchorPoints?: AnchorPoints;
	className?: string;
}

type AvatarProps = {
	alt?: string;
	src: string;
	size?: number;
	wrapperClassName?: string;
	imageClassName?: string
	badge?: AvatarBadge;
}

export const Avatar = (
	{
		src,
		alt,
		size = 40,
		wrapperClassName = '',
		imageClassName = '',
		badge = {
			model: 'simple',
			anchorPoints: { vertical: 'bottom', horizontal: 'right' },
			className: ''
		}
	}: AvatarProps
) => {

	const simpleBadgeClassnames = classnames(
		{ [ styles[ 'avatar-simple-badge' ] ]: badge.model === 'simple' },
		styles[ badge.anchorPoints!.horizontal ],
		styles[ badge.anchorPoints!.vertical ],
	)

	return (
		<div className={
			classnames(
				styles[ 'avatar' ],
				simpleBadgeClassnames,
				wrapperClassName
			)
		}>
			<Image
				src={ src }
				objectFit={ "cover" }
				layout={ "intrinsic" }
				alt={ alt }
				width={ size }
				height={ size }
				className={
					classnames(imageClassName)
				}
			/>

			{ badge &&
			RenderIf(badge.model === 'custom', (
				<div className={ classnames(
					badge.className!,
					styles[ badge.anchorPoints!.horizontal ],
					styles[ badge.anchorPoints!.vertical ],
					styles[ 'badge' ],
				) }>
					{ badge.customComponent }
				</div>
			)) }
		</div>
	);
}