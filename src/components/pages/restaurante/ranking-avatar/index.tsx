import React, { ReactNode } from 'react';
import { Avatar, classnames } from "@src/components";
import styles from "./styles.module.scss";

type RankingAvatarProps = {
	src: string;
	badgeComponent: ReactNode;
	first?: boolean;
	second?: boolean;
	third?: boolean;
}

export const RankingAvatar = (
	{
		src,
		badgeComponent,
		first = false,
		second = false,
		third = false
	}: RankingAvatarProps
) => {

	const altStr = src
		.replace(
			/([\/.]+|(png|jpe?g|gif)+)/gi,
			''
		)

	const isMyOwn = !first && !second && !third;

	return (
		<Avatar
			src={ src }
			alt={ `Avatar ${altStr}` }
			size={ 80 }
			badge={ {
				model: 'custom',
				anchorPoints: {
					vertical: "bottom",
					horizontal: "center"
				},
				customComponent: badgeComponent,
				className: classnames(
					styles[ 'avatar-badge' ],
					{ [ styles[ 'first' ] ]: first },
					{ [ styles[ 'second' ] ]: second },
					{ [ styles[ 'third' ] ]: third },
					{ [ styles[ 'my-own' ] ]: isMyOwn },
				)
			} }
		/>
	)
}