import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const handleChange = event =>{
    setQuery(event.target.value);
    //console.log("event: ", event.target.value);
  }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("response.data.results: ", response.data.results);
        const characters = response.data.results.filter(character => 
          character.name.toLowerCase().includes(query.toLowerCase()))
        setData(characters);
      })
      .catch(error => {
        console.log("Data was not returned,", error);
      });
  }, [query]);
  const inputChange = event =>{
    setQuery(event.target.value);
  }
  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        onChange={inputChange}
        value={query}
      />
      <div>
        {data.map(data=>{
          return(
          <h1>{data.name}</h1>
          )
        })}
      </div>
     
     

    </section>
  );
}
