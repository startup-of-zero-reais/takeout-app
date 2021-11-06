import React from 'react';
import {
		classnames,
		CouponModal,
		HeaderNavigator,
		MainGrid, RenderIf,
		useModal
} from "@src/components";
import { IoArrowBackSharp } from "react-icons/io5";
import { FiXCircle } from "react-icons/fi";
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

						<main className={ classnames(styles.containerCart) }>
								<div className={ classnames(styles.headerContentCart) }>
										<h1>Seu pedido</h1>
										<Button variant={ 'text' } endIcon={ <HiPlus size={ 14 }/> }>
												<span>Adicionar item</span>
										</Button>
								</div>

								{ [ 1, 2, 3 ].map(( _, k ) => (
										<div
												key={ k.toString() }
												className={ classnames(styles.productsCart) }
										>
												<div className={ classnames(styles.productsInfo) }>
														<h3 className={ classnames(styles.bubbleNumber) }>
																1
														</h3>
														<div>
																<h4>California Roll</h4>
																<span>crab & Cucumber</span>
														</div>
												</div>
												<span className={ classnames(styles.productPrice) }>R$ 4,99</span>
										</div>
								)) }

								<div className={ classnames(styles.containerSummary) }>
					<span className={ classnames(styles.titleSummary) }>
						<h3>Resumo</h3>
				    </span>

										<Button
												startIcon={ <BsBox size={ 20 } color={ '#7E8389' }/> }
												className={ classnames(styles.credit) }
												onClick={ onOpen }
										>
												<b>Aplicar cupom de desconto</b>
												<span>R$ 5,00</span>
										</Button>
								</div>

								<div className={ classnames(styles.productPriceTotal) }>
										<div className={ classnames(styles.productPriceResult) }>
												<span>Subtotal</span>
												<p>R$ 14,97</p>
										</div>

										<div className={ classnames(styles.productPriceResult) }>
												<span>Delivery Free</span>
												<p>R$ 14,97</p>
										</div>

										{ RenderIf(true, (
												<div className={ classnames(styles.appliedCoupon) }>
														<div>
																<span>Cupom aplicado</span>
																<span>- R$ 5,00</span>
														</div>

														<button>
																<FiXCircle/>
																Remover cupom
														</button>
												</div>
										)) }

										<div className={ classnames(styles.productPriceResult) }>
												<h4>Total</h4>
												<p>R$ 14,97</p>
										</div>
								</div>

								<Button
										variant="contained"
										color="primary"
										className={ classnames(styles.buttonCheckout) }
								>
										Finalizar pedido
								</Button>
						</main>

						<CouponModal open={ open } onClose={ onClose }/>
				</MainGrid>
		);
}

export default Cart;
