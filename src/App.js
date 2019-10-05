import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Button from "./components/button";
// import Paper from "./components/paper";
import PostData from "../src/data/post.json";

class App extends Component {
  state = {
    PostData,
    currentScore: 0
  };

  handleClick = () => {
    alert("click");
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Button />
      </React.Fragment>
    );
  }
}

export default App;
