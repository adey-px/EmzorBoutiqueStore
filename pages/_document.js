import React from 'react';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document';
/*
Auxilliary logic for main App in _app.js
*/
// Modify page render, fix SSR style issue in MUI
export default class AppDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);                  
	}
}

// Create fresh Server-side sheets, runs b4 render() above
AppDocument.getInitialProps = async (ctx) => {
	const serverSheets = new ServerStyleSheets();
	const originalRender = ctx.renderPage;
	ctx.renderPage = () => {
		return originalRender({
			enhanceApp: (App) => (props) => serverSheets.collect(<App {...props} />),
		});
	};
	const initialProps = await Document.getInitialProps(ctx);
	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			serverSheets.getStyleElement(),
		],
	};
};
