import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacters] = useState();
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
      (response) => {
        setCharacters(response.data);
      }
    );
  }, []);
  return (
    <>
      {character?.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>Origin : {character.origin?.name}</p>
          <img src={character.image} alt="no se mostro" />
        </>
      ) : (
        <h3>Loagin..</h3>
      )}
    </>
  );
};
export default Detail;
