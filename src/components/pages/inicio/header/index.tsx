import React from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import styles from './styles.module.scss'
import { classnames } from "@src/components";
import { Button } from "@material-ui/core";

export const HomeHeader = () => {
	return (
		<div className={ classnames( styles[ 'header-menu' ] ) }>
			<h1>
				Entregando em &#10230;
				<Button>
					<span>Goiania</span>
				</Button>
			</h1>

			<Button>
				<div className={ classnames( styles[ 'basket' ] ) }>
					<FaShoppingBasket size={ 24 }/>
					<div className={ classnames( styles[ 'badge' ] ) }>
						R$ 5,00
					</div>
				</div>
			</Button>
		</div>
	);
}