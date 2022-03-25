import React from 'react';
import coverTwoImg from '../../../../assets/img/Nosotros/coverTwoImg.svg';
import Image from 'next/image';

const CoverTwo = () => {
  return (
    <div className='cover-two-nosotros'>
        <h1>Democratizar</h1>
        <div className='cover-two-nosotros__description'>
            <div className='cover-two-nosotros__description-claims'>
                <p>
                    La experiencia nos ha enseñado que la tecnología tiene que ser accesible para
                    todos. 
                </p>
                <p>
                    Por eso democratizamos su acceso a todos nuestros clientes, dando el mejor servicio,
                    con la mayor eficiencia y eficacia.
                </p>
            </div>
            <Image src={ coverTwoImg } />
        </div>
    </div>
  )
};

export default CoverTwo;