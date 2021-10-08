import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, ThemeProvider } from "@material-ui/core";
import { HomeWorkSharp } from "@material-ui/icons";
import { bottomNavigatorTheme } from "./custom-theme";

type BottomNavigatorProps = {}

export const BottomNavigator = ( _: BottomNavigatorProps ) => {
	const [ value, setValue ] = useState( 0 )

	return (
		<ThemeProvider theme={ bottomNavigatorTheme }>
			<Paper sx={ { position: 'fixed', bottom: 0, left: 0, right: 0 } } elevation={ 3 }>
				<BottomNavigation
					showLabels
					value={ value }
					onChange={ ( e, newValue ) => setValue( newValue ) }
				>
					<BottomNavigationAction label="Home" icon={ <HomeWorkSharp/> }/>
					<BottomNavigationAction label="Cart" icon={ <HomeWorkSharp/> }/>
				</BottomNavigation>
			</Paper>
		</ThemeProvider>
	);
}