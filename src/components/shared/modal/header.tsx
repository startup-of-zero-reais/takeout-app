import React from "react";
import { classnames } from "@src/components";
import { WithChildren } from "./modal-typings";

interface HeaderProps extends WithChildren {
	className?: string;
}

export const Header = ( { children, className = '' }: HeaderProps ) => {
	return (
		<div className={ classnames(className) }>
			{ children }
		</div>
	)
}