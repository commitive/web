import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverFiveImg from '../../../../assets/img/Home/coverFourImg-5.svg';
import Image from 'next/image';

const CoverFive = () => {
  return (
    <Grid className='cover-five-services'>
      <div className='cover-five-services__solutions'>
          <Grid.Row>
              <Grid.Column width={10} className='cover-five-services__solutions-item-img'>
                  <Image src={ coverFiveImg } />
              </Grid.Column>
              <Grid.Column width={6} className='cover-five-services__solutions-item'>
                  <h1>Gestionamos procesos empresariales</h1>
                  <p>
                      Te ayudamos a crear, modificar o eliminar procesos empresariales a través de 
                      las últimas técnicas y con procesos y producto automatizados. Incrementarás 
                      eficienca y ahorro por partes iguales.
                  </p>
              </Grid.Column>
          </Grid.Row>
      </div>
  </Grid>
  )
}

export default CoverFive;