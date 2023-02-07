//import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {
  
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        props.onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      props.onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>{props.children}</Overlay>,
    modalRoot
  );
}

export default Modal;
