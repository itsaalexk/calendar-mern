import Modal from 'react-modal';
import {useState} from "react";
import {ModalForm} from "./ModalForm"



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

    const [isOpen , setIsOpen] = useState(true)
    const onCloseModal =()=>{ setIsOpen(false)}
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        onClose={onCloseModal}
        className ="modal"
        overlayClassName="modal-fondo"
        closeTimeMS={200}
    >
      <ModalForm />
        
    </Modal>
  )
}
