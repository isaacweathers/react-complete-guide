import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Core Concepts', 'Advanced Guide', 'Hooks', 'Redux', 'Testing', 'Next Steps'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const randomIndex = reactDescriptions[genRandomInt(6)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomIndex} Blah foobar Blah foobar
          to build!
        </p>
      </header>
      
    );
  }