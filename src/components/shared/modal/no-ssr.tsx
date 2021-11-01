import { ComponentType } from "react";
import ReactDOM from 'react-dom';
import dynamic from "next/dynamic";
import { RenderIf } from "@src/components";

export function noSsrModal<T extends { open: boolean }>( Component: ComponentType<T> ): ComponentType<T> {
	return dynamic(() => Promise.resolve(( props: T ) => {
		return ReactDOM.createPortal(
			RenderIf(props.open, <Component { ...props }/>),
			document.getElementById("modals-wrapper") ?? document.body
		)
	}), { ssr: false });
}