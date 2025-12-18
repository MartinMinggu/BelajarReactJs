import { useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
export default function Modal({ children, open, onclose, className = '' }) {
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current;
        // if (!modal) return;

        if (open) {
            modal.showModal();
        }
        return () => {
            modal.close();
        }
        // if (!open && modal.open) {
        //     modal.close();
        // }
    }, [open]);
    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onclose}>
            {children}
        </dialog>, document.getElementById('modal'));
}