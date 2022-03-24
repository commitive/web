import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverThreeImg from '../../../../assets/img/Home/corverFourImg-3.svg';
import Image from 'next/image';

const CoverThree = () => {
  return (
    <Grid className='cover-three-services'>
        <div className='cover-three-services__solutions'>
            <Grid.Row>
                <Grid.Column width={10} className='cover-three-services__solutions-item-img'>
                    <Image src={ coverThreeImg } />
                </Grid.Column>
                <Grid.Column width={6} className='cover-three-services__solutions-item'>
                    <h1>Software de Business Intelligent y/o analíticas de tu negocio.</h1>
                    <p>
                        A través de productos propios o productos de terceros solucionamos cualquier 
                        necesidad relacionado con Business Intelligen y analítica de tu negocio. 
                    </p>
                </Grid.Column>
            </Grid.Row>
        </div>
    </Grid>
  )
}

export default CoverThree;