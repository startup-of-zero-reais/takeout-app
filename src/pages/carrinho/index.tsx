import React from 'react';
import {
	classnames,
	CouponModal,
	HeaderNavigator,
	MainGrid,
	useModal
} from "@src/components";
import { IoArrowBackSharp } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { BsBox } from "react-icons/bs";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";

const Cart = () => {
	const [ open, onOpen, onClose ] = useModal();

	return (
		<MainGrid>
			<HeaderNavigator
				title="Carrinho"
				icon={ IoArrowBackSharp }
				action={ console.log }
			/>

			<main className={ classnames(styles['container_cart']) }>
				<div className={ classnames(styles['header_content_cart']) }>
					<h1>Seu pedido</h1>
					<Button variant={ 'text' } endIcon={ <HiPlus size={ 14 }/> }>
						<span>Adicionar item</span>
					</Button>
				</div>

				{ [ 1, 2, 3 ].map(( _, k ) => (
					<div
						key={ k.toString() }
						className={ classnames(styles['products_cart'], styles['products_cart']) }
					>
						<div className={ classnames(styles['products_info']) }>
							<h3 className={ classnames(styles['bubble_number']) }>
								1
							</h3>
							<div>
								<h4>California Roll</h4>
								<span>crab & Cucumber</span>
							</div>
						</div>
						<span className={ classnames(styles['product_price']) }>R$ 4,99</span>
					</div>
				)) }

				<div className={ classnames(styles['container_summary']) }>
					<span className={ classnames(styles['title_summary']) }>
						<h3>Resumo</h3>
				    </span>

					<Button
						startIcon={ <BsBox size={ 20 } color={ '#7E8389' }/> }
						className={ classnames(styles['credit']) }
					>
						<b>Aplicar cupom de desconto</b>
						<span>R$ 5,00</span>
					</Button>
				</div>

				<div className={ classnames(styles['product_price_total']) }>
					<div className={ classnames(styles['product_price_result'], styles['after_content']) }>
						<span>Subtotal</span>
						<p>R$ 14,97</p>
					</div>

					<div className={ classnames(styles['product_price_result'], styles['after_content']) }>
						<span>Delivery Free</span>
						<p>R$ 14,97</p>
					</div>

					<div className={ classnames(styles['product_price_result'], styles['after_content']) }>
						<h4>Total</h4>
						<p>R$ 14,97</p>
					</div>
				</div>

				<Button
					variant="contained"
					color="primary"
					className={ classnames(styles['button_checkout']) }
					onClick={ onOpen }
				>
					Finalizar pedido
				</Button>
			</main>

			<CouponModal open={ open } onClose={ onClose }/>
		</MainGrid>
	);
}

export default Cart;