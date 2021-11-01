import React, { useCallback, useEffect, useState } from "react";
import { classnames } from "@src/components";
import { HandleCloseButton } from './handle-close-button'
import { WithChildren } from "./modal-typings";
import { extractElements } from "./utils";
import { Header } from './header';
import { Content } from "./content";
import { Footer } from "./footer";
import styles from './styles.module.scss';

interface ModalProps extends WithChildren {
	open: boolean;
	onClose: () => void;
	height?: number;
	withHandle?: boolean;

	containerClassname?: string;
	headerClassname?: string;
	contentClassname?: string;
	footerClassname?: string;
}

export const Modal = (
	{
		open = false,
		onClose,
		children,
		height,
		withHandle = false,
		containerClassname = '',
		headerClassname = '',
		contentClassname = '',
		footerClassname = '',
	}: ModalProps
) => {
	const [ active, setActive ] = useState(false);

	const getElement = extractElements(children);

	const headerChild = getElement('Header');
	const contentChild = getElement('Content') ?? <h1>Use Modal.Content</h1>;
	const footerChild = getElement('Footer');

	const wrapperStyles = classnames(
		styles.modalWrapper,
		{ [styles.wrapperActive]: active }
	)

	const overlayStyles = classnames(
		styles.modalOverlay,
		{ [styles.overlayActive]: active }
	);

	const containerStyles = classnames(
		styles.modalContainer,
		containerClassname,
		{ [styles.containerActive]: active }
	);

	const headerStyles = classnames(
		headerClassname,
		[ withHandle, styles.modalHeaderContainerWithHandle, styles.modalHeaderContainer ]
	);

	const contentStyles = classnames(
		contentClassname,
		styles.modalContentContainer
	)

	const footerStyles = classnames(
		footerClassname,
		styles.modalFooterContainer
	)

	const closeModal = useCallback(() => {
		setActive(false)
		setTimeout(() => onClose(), 200)
	}, [])

	const stopPropagation = useCallback(( e: React.MouseEvent ) => {
		e.stopPropagation()
	}, [])

	useEffect(() => {
		setTimeout(() => setActive(open));
	}, [])

	return (
		<div className={ wrapperStyles }>
			<div
				className={ overlayStyles }
				onClick={ closeModal }
			>
				<div
					className={ containerStyles }
					style={ { height } }
					onClick={ stopPropagation }
				>
					<div className={ headerStyles }>
						<header>{ headerChild }</header>
						<HandleCloseButton closeModal={ closeModal } withHandle={ withHandle }/>
					</div>
					<div className={ contentStyles }>{ contentChild }</div>
					<div className={ footerStyles }>{ footerChild }</div>
				</div>
			</div>
		</div>
	);
}

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
