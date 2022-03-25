import React from 'react';
import Image from 'next/image';
import coverOneImg from '../../../../assets/img/Nosotros/coverOneImg.svg';

const CoverOne = () => {
    return (
        <div className='cover-one-nosotros'>
            <h1>Experiencia</h1>
            <div className='cover-one-nosotros__description'>
                <Image src={ coverOneImg } />
                <div className='cover-one-nosotros__description-claims'>
                    <p>
                        Más de 15 años ayudando a la digitalización de todo tipo de empresa, desde grandes 
                        corporaciones a PYMES.
                    </p>
                    <p>
                        Creación de productos propios utilizados a nivel internacional o creando productos 
                        adhoc para cubrir las necesidades de nuestros clientes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CoverOne;