import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import InfoColumn from '../../../misc/InfoColumn';

const CoverSecond = ({ setShowModal }) => {
  return (
    <Container>
      <Grid className='coverSecond'>
        <Grid.Row className='coverSecond__claims'>
          <h1>¿Quieres conocer a qué bono puedes acceder?</h1>
          <h3>Son bonos en modo de subvención no reembolsables, asignados en función del tamaño de la empresa</h3>
        </Grid.Row>
        <Grid.Row className='coverSecond__columns'>
          <Grid.Column className='coverSecond__item'>
            <InfoColumn
              amount='2.000'
              size='0 < 3'
            />
          </Grid.Column>
          <Grid.Column className='coverSecond__item'>
            <InfoColumn
              amount='6.000'
              size='3 < 9'
            />
          </Grid.Column>
          <Grid.Column className='coverSecond__item'>
            <InfoColumn
              amount='12.000'
              size='10 < 50'
            />
          </Grid.Column>
        </Grid.Row>
          <Button
            className='btn-primary'
            onClick={() => setShowModal(true)}
          >
            Contáctanos
          </Button>
      </Grid>
    </Container>
  )
}

export default CoverSecond;