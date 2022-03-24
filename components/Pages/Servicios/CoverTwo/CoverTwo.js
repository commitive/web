import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverTwoImg from '../../../../assets/img/Home/corverFourImg-2.svg';
import Image from 'next/image';

const CoverTwo = () => {
  return (
    <Grid className='cover-two-services'>
        <div className='cover-two-services__solutions'>
            <Grid.Row>
                <Grid.Column width={6} className='cover-two-services__solutions-item'>
                    <h1>Ayudamos a modernizar y digitalizar la gestión con tus clientes</h1>
                    <p>
                        Analizamos tu infraestructura de gestión de clientes y te ayudamos a construir
                        un nuevo proceso. Nuestros objetivo será incrementar tu eficiencia y crecimiento
                        a través de automatizaciones de venta y marketing. 
                    </p>
                </Grid.Column>
                <Grid.Column width={10} className='cover-two-services__solutions-item-img'>
                    <Image src={ coverTwoImg } />
                </Grid.Column>
            </Grid.Row>
        </div>
    </Grid>
  )
}

export default CoverTwo;