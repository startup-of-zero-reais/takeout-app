import React, { ReactNode } from 'react';

export const RenderIf = ( condition: boolean, Component: ReactNode ) => {
	if ( condition ) {
		return (
			<>{ Component }</>
		);
	}

	return null
}