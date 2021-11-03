import React from "react";
import { Modal, noSsrModal } from "@src/components";

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
		>
			<Modal.Header>Header</Modal.Header>
			<Modal.Content>
				<h1>children aqui</h1>
				<h1>children aqui</h1>
				<h1>children aqui</h1>
				<h1>children aqui</h1>
				<h1>children aqui</h1>
				<h1>children aqui</h1>
			</Modal.Content>
			<Modal.Footer>Footer</Modal.Footer>
		</CouponNoSsrModal>
	)
}