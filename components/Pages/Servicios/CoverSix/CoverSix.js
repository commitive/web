import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverSixImg from '../../../../assets/img/Home/coverFourImg-6.svg';
import Image from 'next/image';

const CoverSix = () => {
  return (
    <Grid className='cover-six-services'>
      <div className='cover-six-services__solutions'>
          <Grid.Row>
              <Grid.Column width={6} className='cover-six-services__solutions-item'>
                  <h1>Las conexiones seguras de nuestra mano</h1>
                  <p>
                      Creamos entornos privados para tu empresa, con equipos autorizados y todo automatizado. 
                  </p>
              </Grid.Column>
              <Grid.Column width={10} className='cover-six-services__solutions-item-img'>
                  <Image src={ coverSixImg } />
              </Grid.Column>
          </Grid.Row>
      </div>
  </Grid>
  )
};

export default CoverSix;