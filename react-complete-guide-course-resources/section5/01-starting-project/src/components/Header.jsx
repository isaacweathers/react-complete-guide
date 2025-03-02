import logo from '../assets/investment-calculator-logo.png';

// create a Header component
export default function Header() {
  return (
    <header id='header'>
      {/* display the logo */}
      {/* display the heading */}
        <img src={logo} alt="Logo that shows a bag of money"/>
      <h1>Investment Calculator</h1>
    </header>
  );
}

