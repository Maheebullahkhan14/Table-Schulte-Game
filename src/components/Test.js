import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const GameOverModal2 = ({ isOpen, onClose, TotalGameLives, Timer }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (TotalGameLives === 0 || Timer === 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [TotalGameLives, Timer]);

  if (!isOpen && !show) {
    return false;
  }

  return (
    <Modal show={show} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          <span className="close" onClick={onClose}>&times;</span>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
    </Modal>
  );
};

export default GameOverModal2;
