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
			anchorPoints: { vertical: 'bottom', horizontal: 'right' }
		}
	}: AvatarProps
) => {
	return (
		<div className={
			classnames(
				styles[ 'avatar' ],
				styles[ badge.anchorPoints!.horizontal ],
				styles[ badge.anchorPoints!.vertical ],
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
					classnames( imageClassName )
				}
			/>

			{ badge &&
			RenderIf( badge.model === 'custom', (
				<div className={ classnames( styles[ 'badge' ] ) }>
					{ badge.customComponent }
				</div>
			) ) }
		</div>
	);
}