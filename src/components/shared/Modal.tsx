import { useState } from "react";

const Modal = ({title, body, footer}: any) => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = () => setIsOpen(true)
    const  handleCloseModal = () => setIsOpen(false)
    return (
      
    );
};

export default Modal;
