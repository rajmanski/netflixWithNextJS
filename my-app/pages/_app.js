import '../styles/globals.css'
import {magic} from '../lib/magic';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const checkIsLogged = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/login');
      }
    }
    checkIsLogged();
  }, [])
  return <Component {...pageProps} />
}
