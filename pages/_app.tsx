import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ['latin'] });


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId='230101269671-6dh0qi31l8rfsf22kdvos6q70d8boa61.apps.googleusercontent.com'>
        <Component {...pageProps} /> 
      </GoogleOAuthProvider>
    </div>
  )
}
