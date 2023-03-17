import Cards from "./components/Cards/Cards";
import style from "./App.module.css";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";

function App() {
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const [characters, setCharacters] = useState([]);
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={style.nav}>
        <Nav onSearch={onSearch} />
      </div>
      <Cards characters={characters} />
    </div>
  );
}

export default App;
