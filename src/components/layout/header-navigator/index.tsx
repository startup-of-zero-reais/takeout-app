import React from 'react';
import styles from './style.module.scss'
import { IconType } from 'react-icons'
import { classnames } from "@src/components";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

type HeaderNavigatorProps = {
	title: string;
	action: () => void;
	icon: IconType;
}

export const HeaderNavigator = ( { title, icon: Icon, action: _ }: HeaderNavigatorProps ) => {
	const { back } = useRouter();

	return (
		<nav className={ classnames(styles[ 'header_top' ]) }>
			<IconButton onClick={ back }>
				<Icon
					size={ 18 }
					color="#7E8389"
					className={ classnames(styles[ 'header_icon' ]) }
				/>
			</IconButton>

			<h1>{ title }</h1>
		</nav>
	);
}