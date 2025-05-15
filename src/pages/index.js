import Head from 'next/head';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';
import CvSection from '../../components/CvSection';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Portfolio | Développeur Full Stack</title>
        <meta name="description" content="Portfolio professionnel" />
      </Head>

      <Navbar />
      <Header />
      <About />
      <Skills />
      <CvSection />
      <ContactForm />
      <Footer />
    </>
  );
}