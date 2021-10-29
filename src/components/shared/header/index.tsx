import React from 'react';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { classnames } from "@src/components";
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<div className={ classnames(styles[ 'header' ]) }>
			<h1>
				Entregando em <FiArrowRight size={ 18 } /> Goiania
			</h1>

			<span>
				<FiShoppingBag size={ 24 } />
			</span>
		</div>
	);
}