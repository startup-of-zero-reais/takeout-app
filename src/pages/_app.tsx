import type { AppProps } from 'next/app'
import Head from "next/head";
import { EmotionCache } from "@emotion/utils";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createEmotionCache } from '@src/pages/_document'
import { theme } from "@src/styles/theme";
import { BottomNavigator } from "@src/components";
import '../styles/globals.scss'

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

export default function MyApp( { Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps ) {
	return (
		<CacheProvider value={ emotionCache }>
			<Head>
				<title>Home</title>
				<meta name="viewport" content="initial-scale=1, width=device-width"/>
			</Head>
			<ThemeProvider theme={ theme }>
				<CssBaseline/>
				<Component { ...pageProps } />
				<BottomNavigator />
			</ThemeProvider>
		</CacheProvider>
	)
}
