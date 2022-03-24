import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverSevenImg from '../../../../assets/img/Home/coverFourImg-7.svg';
import Image from 'next/image';

const CoverSeven = () => {
  return (
    <Grid className='cover-seven-services'>
        <div className='cover-seven-services__solutions'>
            <Grid.Row>
                <Grid.Column width={10} className='cover-seven-services__solutions-item-img'>
                    <Image src={ coverSevenImg } />
                </Grid.Column>
                <Grid.Column width={6} className='cover-seven-services__solutions-item'>
                    <h1>Ciberseguridad </h1>
                    <p>
                        Con nuestros productos y servicios te ayudamos a gestionar todos tus datos, 
                        backups, gestión segura de conexiones y cualquier tipo de intrusismo. Automatizamos
                        muchos procesos para agilizar los procesos. 
                    </p>
                </Grid.Column>
            </Grid.Row>
        </div>
    </Grid>
  )
}

export default CoverSeven;