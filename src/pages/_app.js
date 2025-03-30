import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleScroll = () => {
      const yPos = -window.scrollY * 0.3; // Ajustez la valeur (0.3) pour contrôler l'intensité
      const bg = document.querySelector('.background-wrapper');
      if (bg) {
        bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio de Jean-Frédéric Nangy - Développeur Full Stack" />
      </Head>
      
      <div className="background-wrapper"></div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp