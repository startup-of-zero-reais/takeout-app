import type { AppProps } from 'next/app'
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@src/styles/theme";
import { BottomNavigator, createEmotionCache } from "@src/components";
import '../styles/globals.scss'

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

export default function MyApp( props: MyAppProps ) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={ emotionCache }>
			<Head>
				<title>Home</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={ theme }>
				<CssBaseline />
				<Component { ...pageProps } />
				<BottomNavigator />
			</ThemeProvider>
		</CacheProvider>
	)
}
