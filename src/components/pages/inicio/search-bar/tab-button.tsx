import React, { ReactNode } from 'react';
import { Button } from "@material-ui/core";
import { classnames } from "@src/components";
import styles from "@src/components/pages/inicio/search-bar/styles.module.scss";

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