import Image from 'next/image';
import React from 'react';
import coverOneImg from '../../../../assets/img/Home/coverOneImg.svg';
import { Container, Grid, Button } from 'semantic-ui-react';

const CoverOne = () => {
    return (

        <Container>
            <Grid className='coverOne'>
                <Grid.Column width={8} className='coverOne__claims'>
                    <h1>Somos agentes digitalizador</h1>
                    <h3>abarcamos todas las categorías con desarrollo y productos propios o de terceros</h3>
                </Grid.Column>
                <Grid.Column width={8} className='coverOne__img'>
                    <Image src={coverOneImg} alt='agente-digitalizador' />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default CoverOne;