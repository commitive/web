import React from 'react';
import { Modal } from 'semantic-ui-react';
import ContactForm from '../ContactForm';

const ModalForm = ({ showModal, setShowModal }) => {

    const onClose = () => {
        setShowModal(false);
    };

    return (
        <Modal open={ showModal } onClose={ onClose } loading >
            <ContactForm setShowModal={ setShowModal } />
        </Modal>
    )
}

export default ModalForm;