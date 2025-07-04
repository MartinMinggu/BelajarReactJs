import { useState } from 'react';
import Button from './Button.jsx';
import Input from './Input.jsx';
import ButtonText from './ButtonText.jsx';

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div className={"w-100 max-w-sm p-8 mx-auto rounded-md bg-gradient-to-b from-[#474232] to-[#28271c] text-white"}>
            <h6 className="text-center text-xl font-semibold">Login</h6>
            <div className={"flex flex-col gap-2 mb-6"}>
                <Input invalid={emailNotValid} labelText="email" type="email" onChange={(event) => handleInputChange('email', event.target.value)} />
                <Input invalid={passwordNotValid} labelText="password" type="password" $invalid={passwordNotValid} onChange={(event) => handleInputChange('password', event.target.value)} />
            </div>
            <div className="flex justify-between gap-4">
                <ButtonText type="button" onClick={() => alert("Yang Mulia menekan new akun!")}>
                    Create a new account?
                </ButtonText>
                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </div >
    );
}
