import React from "react";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <Link to="/">Home</Link>{" "}
      <Link to="/characters">Characters</Link>{" "}
      <Route path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      
      
      {/*<CharacterList/> */}
    </main>
  );
}
