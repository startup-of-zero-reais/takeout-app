import React, { ReactNode } from "react";

export type ChildrenTypes = (React.ReactChild | React.ReactFragment | React.ReactPortal);

export function extractElements( children: ReactNode ): ( element: string ) => React.ReactElement {
	const childrens: ChildrenTypes[] = React.Children.toArray(children).filter(( c: any ) => {
		return typeof c.type === 'function';
	})

	return function getElement( element: string ) {
		return childrens.find(checkType(element)) as React.ReactElement
	}
}

export function checkType( element: string ) {
	return function ( child: ChildrenTypes ) {
		const c = child as { type?: { name?: string } };
		return c.type?.name === element ?? null;
	}
}