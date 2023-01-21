import Modal from 'react-modal';
import {useState} from "react";
import {ModalForm} from "./ModalForm"
import { useUiStore } from "../../hooks/useUiStore";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

export const CalendarModal = () => {



    const {isDateModalOpen, closeDateModal} = useUiStore()
  
  
  return (
    <Modal
        isOpen={isDateModalOpen}
        onRequestClose={closeDateModal}
        style={customStyles}
        onClose={closeDateModal}
        className ="modal"
        overlayClassName="modal-fondo"
        closeTimeMS={200}
    >
      <ModalForm />
        
    </Modal>
  )
}
