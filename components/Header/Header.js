import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ModalForm from '../Forms/ModalForm/';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = ({ showModal, setShowModal }) => {

    return (
        <div className='header'>
            <Container>
                <Grid>
                    <Grid.Column width={3}>
                        <HeaderLeft />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <HeaderCenter />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <HeaderRight setShowModal={ setShowModal } />
                    </Grid.Column>
                </Grid>
            </Container>
            <ModalForm showModal={ showModal } setShowModal={ setShowModal } />
        </div>
    )
}

export default Header;