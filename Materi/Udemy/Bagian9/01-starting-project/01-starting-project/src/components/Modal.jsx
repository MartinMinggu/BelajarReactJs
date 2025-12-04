import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default forwardRef(function Modal(
    { children, buttonCaption, type = "error" },
    ref
) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }));

    // Pilih gaya backdrop berdasarkan tipe
    const backdropClass =
        type === "error"
            ? "backdrop:bg-red-200/20 backdrop:backdrop-blur-[2 px]"
            : type === "warning"
                ? "backdrop:bg-yellow-100/20 backdrop:backdrop-blur-[1px]"
                : "backdrop:bg-stone-900/60 backdrop:backdrop-blur-[10px]";
    return createPortal(
        <dialog
            ref={dialog}
            className={`
        ${backdropClass}
        p-4 rounded-md shadow-lg 
        transition-all duration-300
        border 
        ${type === "error" ? "border-red-600" : "border-stone-400"}
      `}
        >
            {children}

            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});
