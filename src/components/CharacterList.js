import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm";
import { Route} from "react-router-dom";
export default function CharacterList() {
  //TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios
  //     .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
  //     .then(response => {
  //       console.log("response.data: ", response.data);
  //       setCharacterData(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log("Data was not returned,", error);
  //     });
  // }, []);
 
  return (
    <section className="character-list">
      {characterData.map(character => {
        return <CharacterCard name={character.name} />
      })}
    </section>
  );
}
