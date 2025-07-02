import { calculateInvestmentResults } from "../util/investment";
import Input from "./Input";
import { useState } from 'react'
export default function Main({ handleAnual }) {
    const [form, setForm] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });
    function handleInputChange(id, value) {
        setForm(prev => {
            const updatedForm = {
                ...prev,
                [id]: value
            }
            handleAnual(calculateInvestmentResults(updatedForm))
            return updatedForm;
        })
    }
    return (
        <form id="user-input">
            <div className="input-group">
                <Input text="Initial Investment" id="initialInvestment" value={form.initialInvestment} onChangeValue={handleInputChange} />
                <Input text="Annual Investment" id="annualInvestment" value={form.annualInvestment} onChangeValue={handleInputChange} />
            </div>
            <div className="input-group">
                <Input text="Expected Return" id="expectedReturn" value={form.expectedReturn} onChangeValue={handleInputChange} />
                <Input text="Duration" id="duration" value={form.duration} onChangeValue={handleInputChange} />
            </div>
        </form>
    );
}
