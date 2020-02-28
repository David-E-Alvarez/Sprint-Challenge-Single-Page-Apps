import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to="/">Home</Link>{" "}
      <Link to="/characters">Characters</Link>{" "}
      <Link to="/search">Search</Link>
      <Route path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      <Route path="/search" component={SearchForm}/>
    </header>
  );
}
