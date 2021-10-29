import { createTheme } from "@material-ui/core";

const colors = {
	redVermilionBird: "#E92F48",
	BlackTortoise: "#424242",
	DeepGray: "#7E8389",
	ToGoContainer: "#F2F2F2",
	YellowDragon: "#FFC107",
	SilverSycee: "#A0A8B1",
	BronzeRitual: "#D97953",
}

export const customPalettes = ( k: keyof typeof colors ) => colors[ k ]

export const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: customPalettes('redVermilionBird'),
		}
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 10
				}
			},
		}
	}
})

