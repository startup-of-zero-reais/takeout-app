import React from 'react';
import { IconType } from 'react-icons'
import { IoArrowBackSharp } from 'react-icons/io5';
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { classnames } from "@src/components";
import styles from './style.module.scss'

type HeaderNavigatorProps = {
		title: string;
		icon?: IconType;
}

export const HeaderNavigator = ( { title, icon: Icon = IoArrowBackSharp }: HeaderNavigatorProps ) => {
		const { back } = useRouter();

		return (
				<nav className={ classnames(styles['header_top']) }>
						<IconButton onClick={ back }>
								<Icon
										size={ 18 }
										color="#7E8389"
										className={ classnames(styles['header_icon']) }
								/>
						</IconButton>

						<h1>{ title }</h1>
				</nav>
		);
}
