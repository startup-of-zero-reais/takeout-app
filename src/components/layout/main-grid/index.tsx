import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import { classnames } from "@src/components";

type MainGridProps = {
	children?: ReactNode;
}

export const MainGrid = ( { children }: MainGridProps ) => {
	return (
		<div className={ classnames(styles[ 'main-grid' ]) }>
			{ children }
		</div>
	);
}