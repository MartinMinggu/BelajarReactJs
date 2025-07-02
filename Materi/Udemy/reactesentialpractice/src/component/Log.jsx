import { formatter } from "../util/investment"

export default function Log({ anuallData }) {
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
                {/* <tr>
                    <th>year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
                <tr>
                    <th>year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr> */}
                {
                    anuallData.map((anual) => {
                        return (
                            <tr key={anual.year}>
                                <td>{anual.year}</td>
                                <td>{formatter.format(anual.interestEarnedInYear)}</td>
                                <td>{anual.interest}</td>
                                <td>{formatter.format(anual.totalInterest)}</td>
                                <td>{formatter.format(anual.annualInvestment)}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </div>
}