import './App.scss';
import NavBar from "./Components/NavBar";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar isAuth={true}/>
    </div>
  );
}

export default App;
