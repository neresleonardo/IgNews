import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import {Provider as NextAuthProvider} from 'next-auth/providers'

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      </ NextAuthProvider>
           )
  }

export default MyApp
