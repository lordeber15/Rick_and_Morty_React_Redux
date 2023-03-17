import style from "./Card.module.css";

export default function Card({ name, species, gender, image, onclose }) {
  return (
    <div className={style.container}>
      <button onClick={onclose} className={style.closeButton}>
        X
      </button>
      <h2>Name: {name}</h2>
      <h2>Species: {species}</h2>
      <h2>Genero: {gender}</h2>
      <img src={image} alt="No se mostro" />
    </div>
  );
}
