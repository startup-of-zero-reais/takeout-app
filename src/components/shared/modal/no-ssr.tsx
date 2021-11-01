import { ComponentType } from "react";
import ReactDOM from 'react-dom';
import dynamic from "next/dynamic";

export function noSsrModal<T>( Component: ComponentType<T> ): ComponentType<T> {
	return dynamic(() => Promise.resolve(( props: T ) => {
		return ReactDOM.createPortal(
			<Component { ...props }/>,
			document.getElementById("modals-wrapper") ?? document.body
		)
	}), { ssr: false });
}