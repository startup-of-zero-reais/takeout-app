import React, { ReactNode } from 'react';
import { Button } from "@mui/material";
import { classnames } from "@src/components";
import styles from "./styles.module.scss";

type TabButtonProps = {
	children?: ReactNode;
	isActive?: boolean
	onClick?: () => void;
}

export const TabButton = ( { children, isActive = false, onClick }: TabButtonProps ) => {
	return (
		<Button
			variant={ "text" }
			className={ classnames(
				{ [ styles.active ]: isActive }
			) }
			onClick={ onClick }
		>
			{ children }
		</Button>
	)
}