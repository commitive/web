import React from 'react'
import Header from '../../components/Header';
import CoverOne from '../../components/Pages/Productos/CoverOne';
import Footer from '../../components/misc/Footer';
import HeadPages from '../../components/HeadPages';

const Productos = () => {
  return (
    <div>
      <HeadPages name='Commitive' description='Productos' />
      <Header />
      <CoverOne />
      <Footer />
    </div>
  )
}

export default Productos;