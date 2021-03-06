import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { createEmotionCache } from "@src/components";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
				</Head>
				<body>
				<Main/>
				<div id="modals-wrapper"/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async ( ctx ) => {
	const originalRenderPage = ctx.renderPage;

	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp( App: any ) {
				return function enhancedApp( props ) {
					return <App emotionCache={ cache } { ...props } />
				}
			},
		})

	const initialProps = await Document.getInitialProps(ctx)
	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStylesTags = emotionStyles.styles.map(style => (
		<style
			data-emotion={ `${ style.key } ${ style.ids.join(' ') }` }
			key={ style.key }
			dangerouslySetInnerHTML={ { __html: style.css } }
		/>
	))

	return {
		...initialProps,
		styles: [ ...React.Children.toArray(initialProps.styles), ...emotionStylesTags ]
	}

}

export default MyDocument;