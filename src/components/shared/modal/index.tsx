import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import dynamic from "next/dynamic";

type ModalProps = {
	children: ReactNode;
	open: boolean
}

const ModalOverlay = ( { children }: { children?: ReactNode } ) => {
	return (
		<div style={ { position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "#00000080" } }>
			{ children }
		</div>
	)
}

const NoSSRModal = dynamic( () => Promise.resolve(
	( { open, children }: ModalProps ) => {
		const container = document.getElementById( "__next" )
			?? document.createElement( 'div' )

		return ReactDOM.createPortal(
			open
				? <ModalOverlay>{ children }</ModalOverlay>
				: null,
			container
		)
	}
), { ssr: false } )

export const Modal = ( props: ModalProps ) => <NoSSRModal { ...props } />