import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, children, onClose }) {
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    else {
      dialog.current.close();
    }
  }, [open]);
  const dialog = useRef();
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}
