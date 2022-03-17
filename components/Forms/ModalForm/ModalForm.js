import React from 'react';
import { Modal } from 'semantic-ui-react';

const ModalForm = ({ showModal, setShowModal }) => {

    const onClose = () => {
        setShowModal(false);
    };

    return (
        <Modal open={ showModal } onClose={ onClose }>
            <h1>ModalForm</h1>
        </Modal>
    )
}

export default ModalForm;