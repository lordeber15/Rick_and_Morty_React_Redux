import Card from "./Card";

export default function Cards({ characters }) {
  return (
    <div>
      {characters.map((characters) => {
        return (
          <Card
            name={characters.name}
            species={characters.species}
            gender={characters.gender}
            image={characters.image}
            onclose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
