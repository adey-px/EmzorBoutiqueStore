import { useEffect } from 'react';
import '../styles/globals.css';

//
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const serverStyle = document.querySelector('#jss-server-side');
		if (serverStyle) {
			serverStyle.parentElement.removeChild(serverStyle);
		}
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;

	/* 
  Client-side fix for SSR issue in MUI,
  remove server-side generated CSS
  - create useEffect hook as above
  - next create _document.js
  */