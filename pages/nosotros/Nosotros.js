import React from 'react'
import Header from '../../components/Header';
import HeadPages from '../../components/HeadPages';
import Footer from '../../components/misc/Footer';
import CoverOne from '../../components/Pages/Nosotros/CoverOne';
import CoverThree from '../../components/Pages/Nosotros/CoverThree';
import CoverTwo from '../../components/Pages/Nosotros/CoverTwo';

const Nosotros = () => {
  return (
    <div>
      <HeadPages name='Commitive' description='Nosotros' />
      <Header />
      <CoverOne />
      <CoverTwo />
      <CoverThree />
      <Footer />
    </div>
  )
}

export default Nosotros;