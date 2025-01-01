import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <section id="core-concepts">
        <h2>Core bla</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept 
            title={CORE_CONCEPTS[3].title}  
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          />

        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
