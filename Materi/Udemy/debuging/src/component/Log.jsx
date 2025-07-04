import { formatter } from '../util/investment.js'
export default function Log({ anuallData }) {
    if (!anuallData || anuallData.length === 0) {
        return <p style={{ textAlign: "center" }}>Tidak ada data investasi.</p>;
    }

    const initialInvestment = anuallData[0].valueEndOfYear - anuallData[0].interest - anuallData[0].annualInvestment;
    return <div id="result">
        <table className="center">
            <thead><tr>
                <th>year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Investment Capital</th>
            </tr>
            </thead>
            <tbody>
                {
                    anuallData.map((anual) => {
                        console.log("anual: " + JSON.stringify(anual));
                        const totalInterest = anual.valueEndOfYear - anual.annualInvestment * anual.year - initialInvestment;
                        const totalAmountInvestment = anual.valueEndOfYear - totalInterest;
                        return (
                            <tr key={anual.year}>
                                <td>{anual.year}</td>
                                <td>{formatter.format(anual.valueEndOfYear)}</td>
                                <td>{formatter.format(anual.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvestment)}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </div>
}