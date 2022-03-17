import React from 'react';
import Image from 'next/image';
import { Container } from 'semantic-ui-react';
import coverThreeImg from '../../../../assets/img/Home/coverThreeImg.svg';

const CoverThree = () => {
  return (
    <Container className='coverThree'>
        <Image src={ coverThreeImg } />
        <div className='coverThree__claim'>
          <span>
            <b>Ayudas del programa Kit Digital,</b> financiada por fondos Europeos "Next
            Generation EU" dentro del Plan de Recuperación, Transformación y Resiliscencia,
            para pequeñas empresas, microempresas y autónomos. 
          </span>
        </div>
    </Container>
  )
}

export default CoverThree;