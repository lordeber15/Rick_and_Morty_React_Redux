import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.map((characters) => {
        return (
          <Card
            id={characters.id}
            name={characters.name}
            species={characters.species}
            gender={characters.gender}
            image={characters.image}
            onclose={onClose}
          />
        );
      })}
    </div>
  );
}
