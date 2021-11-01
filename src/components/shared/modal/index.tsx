import React, { useCallback, useRef } from "react";
import { IconButton } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { classnames } from "@src/components";
import { extractElements } from "./utils";
import { WithChildren } from "./modal-typings";
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
	const containerRef = useRef<HTMLDivElement | null>(null);

	const getElement = extractElements(children);

	const headerChild = getElement('Header');
	const contentChild = getElement('Content') ?? <h1>Use Modal.Content</h1>;
	const footerChild = getElement('Footer');

	const wrapperStyles = classnames(
		styles.modalWrapper,
		{ [styles.wrapperActive]: open }
	)

	const overlayStyles = classnames(
		styles.modalOverlay,
		{ [styles.overlayActive]: open }
	);

	const containerStyles = classnames(
		styles.modalContainer,
		{ [containerClassname]: !!containerClassname },
		{ [styles.containerActive]: open }
	);

	const headerStyles = classnames(
		{ [headerClassname]: !!headerClassname },
		[ withHandle, styles.modalHeaderContainerWithHandle, styles.modalHeaderContainer ]
	);

	const contentStyles = classnames(
		{ [contentClassname]: !!contentClassname },
		styles.modalContentContainer
	)

	const footerStyles = classnames(
		{ [footerClassname]: !!footerClassname },
		styles.modalFooterContainer
	)

	const closeModal = useCallback(() => {
		onClose()
	}, [])

	const stopPropagation = useCallback(( e: React.MouseEvent ) => {
		e.stopPropagation()
	}, [])

	return (
		<div className={ wrapperStyles }>
			<div
				className={ overlayStyles }
				onClick={ closeModal }
			>
				<div
					ref={ containerRef }
					className={ containerStyles }
					style={ { height } }
					onClick={ stopPropagation }
				>
					<div className={ headerStyles }>
						<header>{ headerChild }</header>
						{ withHandle
							? (
								<button
									type={ "button" }
									onClick={ closeModal }
								/>
							)
							: (
								<IconButton onClick={ closeModal }>
									<AiOutlineClose/>
								</IconButton>
							) }
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
