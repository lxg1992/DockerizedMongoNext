/** @jsxRuntime classic /
/** @jsx jsx */
import React from 'react'
// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { jsx, ThemeProvider } from 'theme-ui';


import theme from '../theme';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
