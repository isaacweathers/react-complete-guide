export default function UserInput({ onChange, userInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        type="number"
                        id="initial-investment"
                        value={userInput.initialInvestment}
                        required
                        onChange={(event) => onChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number"
                        id="annual-investment"
                        value={userInput.annualInvestment}
                        required
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number"
                        id="expected-return"
                        value={userInput.expectedReturn}
                        required
                        onChange={(event) => onChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration"
                        value={userInput.duration}
                        required
                        onChange={(event) => onChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}
// Compare this snippet from react-complete-guide-course-resources/section5/01-starting-project/src/components/UserOutput.jsx:
// // create a UserOutput component
// export default function UserOutput(props) {
//   return (
//     <section id="user-output">
//       <h2>Investment Growth</h2>
//       <p>Initial Investment: {props.initialInvestment}</p>
//       <p>Annual Investment: {props.annualInvestment}</p>
//       <p>Expected Return: {props.expectedReturn}%</p>
//       <p>Duration: {props.duration} years</p>
//     </section>
//   );
// }
//

// Compare this snippet from react-complete-guide-course-resources/section5/01-starting-project/src/components/UserInput.jsx:
// // create a UserInput component
// export default function UserInput(props) {
//   return (
//     <section id="user-input">
//       <h2>Enter Your Investment Details</h2>
//       <label htmlFor="initial-investment">Initial Investment</label>
//       <input type="number" id="initial-investment" />
//       <label htmlFor="annual-investment">Annual Investment</label>
//       <input type="number" id="annual-investment" />
//       <label htmlFor="expected-return">Expected Return</label>
//       <input type="number" id="expected-return" />
//       <label htmlFor="duration">Duration</label>
//       <input type="number" id="duration" />
//     </section>
//   );
// }
//

// Compare this snippet from react-complete-guide-course-resources/section5/01-starting-project/src/components/UserOutput.jsx:
// // create a UserOutput component
// export default function UserOutput(props) {
//   return (
//     <section id="user-output">
//       <h2>Investment Growth</h2>
//       <p>Initial Investment: {props.initialInvestment}</p>
//       <p>Annual Investment: {props.annualInvestment}</p>
//       <p>Expected Return: {props.expectedReturn}%</p>
//       <p>Duration: {props.duration} years</p>
//     </section>
//   );
// }
//
