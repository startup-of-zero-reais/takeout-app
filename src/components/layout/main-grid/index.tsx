import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import { classnames } from "@src/components";

type MainGridProps = {
		children?: ReactNode;
		className?: string;
}

export const MainGrid = ( { children, className = '' }: MainGridProps ) => {
		return (
				<div className={ classnames(styles['main-grid'], className) }>
						{ children }
				</div>
		);
}
