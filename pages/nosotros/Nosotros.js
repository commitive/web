import React from 'react'
import Header from '../../components/Header';
import HeadPages from '../../components/HeadPages';
import Footer from '../../components/misc/Footer';
import CoverOne from '../../components/Pages/Nosotros/CoverOne';

const Nosotros = () => {
  return (
    <div>
      <HeadPages name='Commitive' description='Nosotros' />
      <Header />
      <CoverOne />
      <Footer />
    </div>
  )
}

export default Nosotros;