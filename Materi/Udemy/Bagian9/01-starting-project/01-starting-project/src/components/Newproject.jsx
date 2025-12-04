import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function ({ onAdd, onCancel }) {
    const modal = useRef();
    const refTitle = useRef();
    const refDescription = useRef();
    const refDueDate = useRef();
    function handleSave() {
        const enteredTitle = refTitle.current.value;
        const enteredDescription = refDescription.current.value;
        const enteredDueDate = refDueDate.current.value;

        // console.log("enteredTitle ::>  " + enteredTitle)
        // console.log("enteredDescription ::>  " + enteredDescription)
        // console.log("enteredDueDate ::>  " + enteredDueDate)
        // validation ....

        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === '') {
            // show modal
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }


    return <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid input</h2>
            <p className='text-stone-400 mb-4'>Oops... look like tou forgot enter something</p>
            <p className='text-stone-400 mb-4'>perhatikan lagi</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>Save
                    </button></li>
            </menu>
            <div>
                <Input id="title" label="Title" ref={refTitle} />
                <Input id="description" label="Description" typeInput={2} ref={refDescription} />
                <Input id="dueDate" label="Due Date" type="date" ref={refDueDate} />
                {/* <Input id="dueDatetime" label="Due DateTime" type="datetime-    " />
            <Input id="duetime" label="Due Time" type="time" /> */}
            </div>
        </div></>;
}