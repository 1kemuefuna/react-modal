import React, { useState } from "react";
import "./modal.css";

type Animations =
  | "slidein-left"
  | "slidein-right"
  | "slidein-top"
  | "slidein-bottom"
  | "zoomin"
  | "slidein-bottom-right"
  | "slidein-bottom-left"
  | "slidein-top-right"
  | "slidein-top-left"
  | "fade-in";

interface ModalProps {
  isOpen: boolean;
  animation: Animations;
  onClose: () => void;
  closeIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeIcon,
  animation = "slidein-top",
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    const delay = 300;
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, delay);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isClosing ? "closing" : ""} ${animation}`}>
      <div className="modal__content">
        <button className="modal__close-button" onClick={closeModal}>
          {closeIcon !== undefined ? closeIcon : "close"}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
