import Image from 'next/image';
import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import coverFourImgOne from '../../../../assets/img/Home/corverFourImg-1.svg';
import coverFourImgSecond from '../../../../assets/img/Home/corverFourImg-2.svg';
import coverFourImgThird from '../../../../assets/img/Home/corverFourImg-3.svg';
import coverFourImgForth from '../../../../assets/img/Home/coverFourImg-4.svg';
import coverFourImgFifth from '../../../../assets/img/Home/coverFourImg-5.svg';
import coverFourImgSixth from '../../../../assets/img/Home/coverFourImg-6.svg';
import coverFourImgSeventh from '../../../../assets/img/Home/coverFourImg-7.svg';
import coverFourImgEight from '../../../../assets/img/Home/coverFourImg-8.svg';

const CoverFour = () => {
  return (
    <Container>
      <Grid className='coverFour'>
        <Grid.Row className='coverFour__claims'>
            <h1>¿Cómo podemos ayudar a conseguir una mejor digitalización?</h1>
            <h3>Podemos cometer servicios en estas categorías</h3>
        </Grid.Row>

        <div width={16} className='coverFour__solutions'>
          <Grid.Row className='coverFour__item'>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgOne } />
              <h3>Diseño, creación y gestión de webs, webapps y apps móviles</h3>
            </Grid.Column>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgSecond } />
              <h3>Ayuamos a modernizar y digitalizar la gestión con tus clientes</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='coverFour__item'>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgThird } />
              <h3>Software de Business Intelligent y/o analíticas de tu negocio.</h3>
            </Grid.Column>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgForth } />
              <h3>Desde soluciones a medida a implantaciones de productos como Slack, Githubo o Microsoft Teams para digitalizar tu oficina virtual</h3> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='coverFour__item'>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgFifth } />
              <h3>Innovamos en la gestión de procesos para que ganes agilidad y mucho ahorro de tiempo y dinero</h3>
            </Grid.Column>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgSixth } />
              <h3>Creamos entornos privados para tu empresa, con equipos autorizados y todo automatizado</h3> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='coverFour__item'>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgSeventh } />
              <h3>Desde la gestión de tus datos sensibles, automatizar la creación de backups y la gestión segura de tus conexiones </h3>
            </Grid.Column>
            <Grid.Column width={8} className='coverFour__solution'>
              <Image src={ coverFourImgEight } />
              <h3>Pon todos tus productos al alcance de todo el mundo con tiendas on-line para que puedas crear clientes en todo el mundo</h3> 
            </Grid.Column>
          </Grid.Row>
          
          {/* <Grid.Row className='coverFour__solution__reverse'>
            <Image src={ coverFourImgForth } />
            <h3>Desde soluciones a medida a implantaciiones de productos como Slack, Githubo o Microsoft Teams para digitalizar tu oficina virtual</h3> 
          </Grid.Row>
          <Grid.Row className='coverFour__solution'>
            <Image src={ coverFourImgThird } />
            <h3>Software de Business Intelligent y/o analíticas de tu negocio.</h3>
          </Grid.Row>
          <Grid.Row className='coverFour__solution__reverse'>
            <h3>Desde soluciones a medida a implantaciiones de productos como Slack, Githubo o Microsoft Teams para digitalizar tu oficina virtual</h3> 
            <Image src={ coverFourImgForth } />
          </Grid.Row> */}
          
        </div>
      </Grid>
    </Container>
  )
}

export default CoverFour;