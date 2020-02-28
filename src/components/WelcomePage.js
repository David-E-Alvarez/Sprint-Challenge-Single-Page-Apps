import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import index from "../index";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

export default function WelcomePage() {
  return (
   
      <section className="welcome-page">
          <header>
            <h1>Welcome to the ultimate fan site!</h1>
            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
            </header>
    </section>
    
  );
}
