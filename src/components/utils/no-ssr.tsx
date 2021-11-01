import { ComponentType } from "react";
import dynamic from "next/dynamic";

export function noSsr<T>( Component: ComponentType<T> ): ComponentType<T> {
	return dynamic(() => Promise.resolve(( props: T ) => {
		return <Component { ...props }/>
	}), { ssr: false });
}