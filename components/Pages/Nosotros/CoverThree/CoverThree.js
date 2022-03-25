import React from 'react';
import coverThreeImg from '../../../../assets/img/Nosotros/coverThreeImg.svg';
import Image from 'next/image';

const CoverThree = () => {
  return (
    <div className='cover-three-nosotros'>
        <h1>Transparencia</h1>
        <div className='cover-three-nosotros__description'>
            <Image src={ coverThreeImg } />
            <div className='cover-three-nosotros__description-claims'>
                <p>
                    Creemos que la transparencia es un valor básico en la creación de proyecto digitales.
                </p>
                <p>
                    Nuestra comunicación es constante para informar a nuestros clientes de los estados
                    de cada proyecto para que sepan en qué situación están y como se están ejecutanto. 
                </p>
            </div>
        </div>
    </div>
  )
};

export default CoverThree;