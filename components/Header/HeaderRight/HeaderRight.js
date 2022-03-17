import React from 'react';
import { Button } from 'semantic-ui-react';

const HeaderRight = ({ setShowModal }) => {
  return (
    <div className='headerRight'>
        <Button
            className='btn-primary'
            onClick={() => setShowModal(true)}
        >
            Contáctanos
        </Button>
    </div>
  )
}

export default HeaderRight;