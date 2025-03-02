import { useState } from "react";
export default function UserInput(props) {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <section id="user-input">
            <h2>Enter Your Investment Details</h2>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        type="number"
                        id="initial-investment"
                        value={userInput.initialInvestment}
                        required
                onChange={(event) => handleChange('initialInvestment', event.target.value)}
                    />
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number"
                        id="annual-investment"
                        value={userInput.annualInvestment}
                        required
                onChange={(event) => handleChange('annualInvestment', event.target.value)}
                    />
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number"
                        id="expected-return"
                        value={userInput.expectedReturn}
                        required
                onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    />
                    <label htmlFor="duration">Duration</label>
            <input type="number"
                id="duration"
                        value={userInput.duration}
                        required
                onChange={(event) => handleChange('duration', event.target.value)}
                    />
        </section>
    );
}
