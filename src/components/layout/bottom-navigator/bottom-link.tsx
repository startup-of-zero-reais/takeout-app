import React, { MouseEvent, ReactNode } from 'react';
import { classnames } from "@src/components";
import styles from "./style.module.scss";

type BottomLinkProps = {
	to: string;
	onClick?: (e: MouseEvent) => void;
	icon: ReactNode;
	selected?: boolean
}

export const BottomLink = ( { to, onClick, icon, selected = false }: BottomLinkProps ) => {
	return (
		<a
			href={to}
			className={ classnames( { [ styles[ 'active' ] ]: selected } ) }
			onClick={ onClick }
		>
			{icon}
		</a>
	);
}