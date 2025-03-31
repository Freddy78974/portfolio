import styles from '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // const bgImagePath = 'assets/images/code-binaire.png';

  useEffect(() => {
    const handleScroll = () => {
      const yPos = -window.scrollY * 0.3;
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

  // function MyApp({ Component, pageProps }) {
  //   useEffect(() => {
  //     if (process.env.NODE_ENV === 'production') {
  //       document.documentElement.style.setProperty(
  //         '--bg-image',
  //         'url("assets/images/code-binaire.png")'
  //       )
  //     }
  //   }, []);
  // }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio de Jean-Frédéric Nangy - Développeur Full Stack" />
      </Head>

      {/* Image de fond fixe qui couvre toute la page */}
      <div className="background-fixed">
        <img
          src="assets/images/code-binaire.png"
          alt="Background"
          className="background-image"
        />
      </div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
