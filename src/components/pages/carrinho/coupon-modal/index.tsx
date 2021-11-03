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
		>
			<Modal.Header>Aqui temos o cabeçalho do Modal</Modal.Header>
			<Modal.Content>
				<span>Aqui temos o corpo do modal</span>
			</Modal.Content>
			<Modal.Footer>
				<Button variant={ "contained" } fullWidth>
					Aqui temos um botão
				</Button>
			</Modal.Footer>
		</CouponNoSsrModal>
	)
}