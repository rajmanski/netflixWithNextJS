import '../styles/globals.css'
import {magic} from '../lib/magic';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }) {

  const [loading, isLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkIsLogged = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        isLoading(false);
        router.push('/');
      } else {
        isLoading(false);
        router.push('/login');
      }
    }
    checkIsLogged();
  }, [])
  return < Component {...pageProps} /> 
}
