import React from "react";
import { Button, IconButton } from "@mui/material";
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
	height?: number;
	withHandle?: boolean;

	containerClassname?: string;
	headerClassname?: string;
	contentClassname?: string;
	footerClassname?: string;
}

export const Modal = (
	{
		children,
		height,
		withHandle = false,
		containerClassname = '',
		headerClassname = '',
		contentClassname = '',
		footerClassname = '',
	}: ModalProps
) => {
	const getElement = extractElements(children);

	const headerChild = getElement('Header');
	const contentChild = getElement('Content') ?? <h1>Use Modal.Content</h1>;
	const footerChild = getElement('Footer');

	const containerStyles = classnames(
		styles.modalContainer,
		{ [containerClassname]: !!containerClassname }
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

	return (
		<div className={ classnames(styles.modalWrapper) }>
			<div className={ classnames(styles.modalOverlay) }>
				<div
					className={ containerStyles }
					style={ { height } }
				>
					<div className={ headerStyles }>
						<header>{ headerChild }</header>
						{ withHandle
							? (
								<button type={ "button" }/>
							)
							: (
								<IconButton>
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
