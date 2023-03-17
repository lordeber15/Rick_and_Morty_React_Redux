import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";

export default function Cards({ characters }) {
  const onClose = () => window.alert("Emulamos que se cierra la card");

  return (
    <div className={style.container}>
      {characters.map((characters) => {
        return (
          <Card
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
