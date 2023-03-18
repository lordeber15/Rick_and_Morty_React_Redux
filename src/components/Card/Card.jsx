import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onclose }) {
  return (
    <div className={style.container}>
      <button onClick={() => onclose(id)} className={style.closeButton}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
      <h2>Species: {species}</h2>
      <h2>Genero: {gender}</h2>
      <img src={image} alt="No se mostro" />
    </div>
  );
}
