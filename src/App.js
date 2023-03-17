import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import characters from "./data.js";
import style from "./App.module.css";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
