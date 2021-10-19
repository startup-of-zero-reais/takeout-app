import React from 'react';
import Link from 'next/link';
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai"
import styles from './styles.module.scss'
import { classnames } from "@src/components";
import { Button } from "@material-ui/core";

export const HomeHeader = () => {
	return (
		<div className={ classnames( styles[ 'header-menu' ] ) }>
			<h1>
				Entregando em &#8594;
				<Link href={ "/endereco" } passHref>
					<Button>
						<span>Goiania <small><AiOutlineCaretDown /></small></span>
					</Button>
				</Link>
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