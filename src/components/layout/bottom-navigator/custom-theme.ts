import { createTheme } from "@material-ui/core";
import { customPalettes } from "@src/styles/theme";

export const bottomNavigatorTheme = createTheme( {
	palette: {
		mode: "light",
		primary: {
			main: customPalettes( 'redVermilionBird' )
		},
		secondary: {
			main: customPalettes( 'BronzeRitual' )
		},
		grey: {
			A100: customPalettes( 'ToGoContainer' ),
			A200: customPalettes( 'DeepGray' ),
			A400: customPalettes( 'SilverSycee' ),
			A700: customPalettes( 'BlackTortoise' )
		}
	},
	components: {
		MuiBottomNavigation: {
			styleOverrides: {
				root: {
					backgroundColor: customPalettes( 'redVermilionBird' )
				}
			}
		},
		MuiBottomNavigationAction: {
			styleOverrides: {
				selected: {
					color: "yellow !important"
				},

				root: {
					color: "white",
				},
			},

		},
	}
} )