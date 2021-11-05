import React from "react";
import { classnames, Modal, noSsrModal } from "@src/components";
import { Button } from "@mui/material";
import styles from './styles.module.scss';

export type CouponModalProps = {
	open: boolean;
	onClose: () => void;
}

export const CouponModal = ( { open, onClose }: CouponModalProps ) => {
	const CouponNoSsrModal = noSsrModal(Modal);

	return (
		<CouponNoSsrModal
			open={ open }
			onClose={ onClose }
			containerClassname={ classnames(styles.containerAdditional) }
			height={ 500 }
		>
			<Modal.Content>
				<div className={ classnames(styles.couponCard) }>
					<h2>Créditos de cupom</h2>

					<div>
						<h2>R$ 5,75</h2>
						<span>Creditos</span>
					</div>
				</div>

				<p className={ classnames(styles.earnTip) }>
					Você pode ganhar mais crédito ou receber mais cupons fazendo pedidos de restaurantes certificados
				</p>
			</Modal.Content>
			<Modal.Footer>
				<Button variant={ "contained" } size={ "large" } fullWidth>
					Aplicar cupom
				</Button>
			</Modal.Footer>
		</CouponNoSsrModal>
	)
}