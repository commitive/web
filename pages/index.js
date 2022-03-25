import { useState } from 'react';
import Header from "../components/Header";
import Head from "../components/HeadPages";
import CoverOne from "../components/Pages/Home/CoverOne/";
import CoverSecond from '../components/Pages/Home/CoverSecond';
import CoverThree from '../components/Pages/Home/CoverThree';
import CoverFour from '../components/Pages/Home/CoverFour';
import Footer from '../components/misc/Footer';
import ContactForm from '../components/Forms/ContactForm';

export default function Home() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head name='Commitive' />
      <Header showModal={ showModal } setShowModal={ setShowModal } />
      <CoverOne />
      <CoverSecond setShowModal={ setShowModal } />
      <CoverThree />
      <CoverFour />
      <Footer />
    </>
  )
};