export default function Card({ name, species, gender, image, onclose }) {
  return (
    <div>
      <button onClick={() => window.alert("Emulamos que se cierra la card")}>
        X
      </button>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="No se mostro" />
    </div>
  );
}
