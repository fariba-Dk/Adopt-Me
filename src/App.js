import Pet from './components/Pet';
import './styles.css';
import SearchParams from "./components/SearchParams"

function App() {
  return (
    <div>

      <h1>Pet Saved</h1>
      <SearchParams/>
      {/* <Pet name="Pixie" animal="dog" breed="Jack Russell Terrier"/>
      <Pet name="Tootoo" animal="bird" breed="Parrot"/>
      <Pet name="Bella" animal="dog" breed="Chihuahua"/> */}

    </div>

  );
}

export default App;
