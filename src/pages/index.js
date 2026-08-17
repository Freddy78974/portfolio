import Head from 'next/head';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Projects from '../../components/Projects';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import { SectionBorderObserver } from '../../components/ScrollObserver';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jean-Frédéric Nangy | Software & AI Solution Design</title>
        <meta
          name="description"
          content="Portfolio de Jean-Frédéric Nangy : architecture logicielle, ingénierie assistée par IA et conception de produits numériques."
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="Jean-Frédéric Nangy | Software & AI Solution Design" />
        <meta
          property="og:description"
          content="Portfolio de Jean-Frédéric Nangy : architecture logicielle, ingénierie assistée par IA et conception de produits numériques."
        />
        <meta property="og:url" content="https://freddy78974.github.io/portfolio/" />
        <meta property="og:image" content="https://freddy78974.github.io/portfolio/assets/images/IMG_4674.jpg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Jean-Frédéric Nangy | Software & AI Solution Design" />
        <meta
          name="twitter:description"
          content="Portfolio de Jean-Frédéric Nangy : architecture logicielle, ingénierie assistée par IA et conception de produits numériques."
        />
        <meta name="twitter:image" content="https://freddy78974.github.io/portfolio/assets/images/IMG_4674.jpg" />
      </Head>

      <Navbar />
      <Header />
      <Profile />
      <Projects />
      <ContactForm />
      <Footer />
      
      {/* Composant pour l'effet de bordure lumineuse */}
      <SectionBorderObserver />
    </>
  );
}