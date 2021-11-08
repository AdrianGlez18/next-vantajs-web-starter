import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import { useEffect } from 'react';

import "/styles/globals.css";
import theme from '../styles/theme';
import Header from "@components/Header";
import Footer from "@components/Footer";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js");
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return() => {
      if(threeScript) {
        threeScript.remove();
      }
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>NextJS Website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}