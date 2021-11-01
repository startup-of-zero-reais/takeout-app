import React from "react";
import { WithChildren } from "@src/components/shared/modal/modal-typings";
import { classnames } from "@src/components";

interface HeaderProps extends WithChildren {
	className?: string;
}

export const Header = ( { children, className = '' }: HeaderProps ) => {
	return (
		<div className={ classnames(
			{ [className]: !!className }
		) }>
			{ children }
		</div>
	)
}