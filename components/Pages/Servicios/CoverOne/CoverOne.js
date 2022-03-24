import Image from 'next/image';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import coverOneImg from '../../../../assets/img/Home/corverFourImg-1.svg';

const CoverOne = () => {
    return (
        <Grid className='cover-one-services'>
            <div className='cover-one-services__solutions'>
                <Grid.Row>
                    <Grid.Column width={10} className='cover-one-services__solutions-item-img'>
                        <Image src={ coverOneImg } />
                    </Grid.Column>
                    <Grid.Column width={6} className='cover-one-services__solutions-item'>
                        <h1>Diseño, creación y gestión de webs, webapps y apps móviles</h1>
                        <p>
                            Ofercemos servicios de creación de todo tipo de servicios relacionados
                            con Desarrollo Web. Desde Web estáticas, SaaS, Webapps hasta aplicaciones
                            móviles. 
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </div>
        </Grid>
    )
}

export default CoverOne;