import React, { ReactNode } from "react";
import Link from 'next/link';
import { Button } from "@mui/material";
import { FiChevronRight } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { classnames, HeaderNavigator, MainGrid } from "@src/components";
import styles from "./styles.module.scss";

const ConfirmOrder = () => {
		return (
				<MainGrid>
						<HeaderNavigator title={ "Confirmar pedido" }/>
						<div className={ classnames(styles.pageHeader) }>
								<h1>Katsuei</h1>
								<p>
										<span>Japanese</span>
										<span>Sushi</span>
								</p>
						</div>

						<div className={ classnames(styles.reviewButtonsWrapper) }>
								<ReviewButton
										label={ "Endereço" }
										extraButton={ (<Button type={ 'button' }>Adicionar nota de entrega <IoAdd/></Button>) }
										info={ "434 Broadway Floor 3\nNew York, NY 10013" }
										link={ "/endereco" }
								/>

								<ReviewButton
										label={ "Tempo estimado de entrega" }
										info={ "10-20 min" }
								/>

								<ReviewButton
										label={ "Método de pagamento" }
										info={ "Cartão de crédito (ELO)" }
										link={ "/pagamento" }
								/>
						</div>

						<div className={ classnames(styles.total) }>
								<strong>
										<span>Total:</span>
										<span>R$ 16.04</span>
								</strong>
						</div>

						<div className={ classnames(styles.buttonCheckout) }>
								<Link passHref href={ "/pagar" }>
										<Button
												variant="contained"
												color="primary"
												fullWidth
										>
												Finalizar pedido
										</Button>
								</Link>
						</div>
				</MainGrid>
		)
}

type ReviewButtonProps = {
		label: string;
		extraButton?: ReactNode;
		info: string;
		onClick?: () => void;
		link?: string;
};

const ReviewButton = ( { label, extraButton, info, onClick, link }: ReviewButtonProps ) => {
		return (
				<div className={ classnames(styles.reviewButton) }>
						<div className={ classnames(styles.label) }>
								<label>{ label }</label>
								<div>{ extraButton }</div>
						</div>


						<div className={ classnames(styles.linkOrButtonWrapper) }>
								{ !!link
										? (
												<Link passHref href={ link }>
														<a>
																<span>{ info }</span>

																<FiChevronRight size={ 24 }/>
														</a>
												</Link>
										) : (
												<button onClick={ onClick }>
														<span>{ info }</span>

														<FiChevronRight size={ 24 }/>
												</button>
										) }
						</div>
				</div>
		)
}

export default ConfirmOrder;
