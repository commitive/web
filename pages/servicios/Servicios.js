import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/misc/Footer';
import CoverOne from '../../components/Pages/Servicios/CoverOne';
import HeadPages from '../../components/HeadPages';
import { Container } from 'semantic-ui-react';
import CoverTwo from '../../components/Pages/Servicios/CoverTwo';
import CoverThree from '../../components/Pages/Servicios/CoverThree';
import CoverFour from '../../components/Pages/Servicios/CoverFour';
import CoverFive from '../../components/Pages/Servicios/CoverFive';
import CoverSix from '../../components/Pages/Servicios/CoverSix';
import CoverSeven from '../../components/Pages/Servicios/CoverSeven';
import CoverEight from '../../components/Pages/Servicios/CoverEight';

const Servicios = () => {
  return (
    <>
      <HeadPages name='Commitive' description='Servicios' />
      <Header />
      <Container>
        <h1>Más de 15 años realizando estos servicios nos avalan</h1>
        <CoverOne />
        <CoverTwo />
        <CoverThree />
        <CoverFour />
        <CoverFive />
        <CoverSix />
        <CoverSeven />
        <CoverEight />
      </Container>
      <Footer />
    </>
  )
}

export default Servicios;