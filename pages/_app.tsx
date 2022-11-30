/** @jsxImportSource theme-ui */

import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui';
import Nav from '../src/components/nav';


import theme from '../theme';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Nav/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
