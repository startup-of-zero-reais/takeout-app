import React from "react";
import { classnames } from "@src/components";
import { WithChildren } from "./modal-typings";

export interface FooterProps extends WithChildren {
	className?: string;
}

export const Footer = ( { children, className = '' }: FooterProps ) => {
	return (
		<div className={ classnames(className) }>
			{ children }
		</div>
	)
}