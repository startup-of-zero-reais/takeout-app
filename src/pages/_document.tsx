import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache';

export function createEmotionCache() {
	return createCache({ key: 'css' })
}

class MyDoc extends Document {
	render() {
		return (
			<Html lang='pt-br'>
				<Head>
					<link rel="stylesheet"
					      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}

MyDoc.getInitialProps = async ( ctx: DocumentContext ) => {
	const originalRenderPage = ctx.renderPage;

	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			// eslint-disable-next-line react/display-name
			enhanceApp: ( App: any ) => ( props ) =>
				<App emotionCache={ cache } { ...props } />,
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

export default MyDoc;