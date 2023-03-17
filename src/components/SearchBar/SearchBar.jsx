import style from "../SearchBar/searchbar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={style.bar}>
      <input type="search" className={style.searchInput} />
      <button
        className={style.searchButtom}
        onClick={(id) => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
