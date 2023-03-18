import { useState } from "react";
import style from "../SearchBar/searchbar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.bar}>
      <input
        type="search"
        className={style.searchInput}
        onChange={handleChange}
      />
      <button className={style.searchButtom} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
