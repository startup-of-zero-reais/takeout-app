import React from "react";
import { WithChildren } from "./modal-typings";
import { classnames } from "@src/components";

export interface ContentProps extends WithChildren {
	className?: string;
}

export const Content = ( { children, className = '' }: ContentProps ) => {
	return (
		<div className={ classnames(className) }>
			{ children }
		</div>
	)
}