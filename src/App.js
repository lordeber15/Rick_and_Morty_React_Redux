import Cards from "./components/Cards/Cards";
import style from "./App.module.css";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {
  function onSearch(id) {
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje Duplicado");
    }
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  const [characters, setCharacters] = useState([]);
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={style.nav}>
        <Nav onSearch={onSearch} />
      </div>
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
