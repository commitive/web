import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverEightImg from '../../../../assets/img/Home/coverFourImg-8.svg';
import Image from 'next/image';

const CoverEight = () => {
  return (
    <Grid className='cover-eight-services'>
      <div className='cover-eight-services__solutions'>
          <Grid.Row>
              <Grid.Column width={6} className='cover-eight-services__solutions-item'>
                  <h1>Pon todos tus productos a disposición del mundo entero</h1>
                  <p>
                      Diseñamos y programamos ecommers para para cualquier tipo de negocio, desde sencillos
                      ecommers hasta marketplaces. Para que puedas vender tus productos y servicios por internet
                      sin ningún tipo de problema.  
                  </p>
              </Grid.Column>
              <Grid.Column width={10} className='cover-eight-services__solutions-item-img'>
                  <Image src={ coverEightImg } />
              </Grid.Column>
          </Grid.Row>
      </div>
    </Grid>
  )
}

export default CoverEight;