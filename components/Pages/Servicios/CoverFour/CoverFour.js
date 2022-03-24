import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverFourImg from '../../../../assets/img/Home/coverFourImg-4.svg';
import Image from 'next/image';

const CoverFour = () => {
    return (
        <Grid className='cover-four-services'>
            <div className='cover-four-services__solutions'>
                <Grid.Row>
                    <Grid.Column width={6} className='cover-four-services__solutions-item'>
                        <h1>Digitalizamos o creamos tu oficina virtual</h1>
                        <p>
                            Ponemos a tu disposición software generalizado como Slack o Microsoft Teams, 
                            pero también podemos crear soluciones a medida para tu empresa. 
                        </p>
                    </Grid.Column>
                    <Grid.Column width={10} className='cover-four-services__solutions-item-img'>
                        <Image src={ coverFourImg } />
                    </Grid.Column>
                </Grid.Row>
            </div>
        </Grid>
    )
};

export default CoverFour;