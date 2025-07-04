import { calculateInvestmentResults } from "../util/investment";
import Input from "./Input";
import { useState } from 'react'
export default function Main({ handleAnual }) {
    const [form, setForm] = useState({
        initialInvestment: 1500,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: ""
    });
    function handleInputChange(id, value) {
        setForm(prev => {
            const updatedForm = {
                ...prev,
                [id]: Number(value)
                // [id]: (value)
            }
            console.log("updatedForm" + JSON.stringify(updatedForm));
            let annualData = calculateInvestmentResults(updatedForm);
            console.log("annualData" + JSON.stringify(annualData));
            handleAnual(annualData);

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
