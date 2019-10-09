import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Button from "./components/button";
// import Paper from "./components/paper";
import PostData from "../src/data/post.json";
import { Route, Switch } from 'react-router-dom';
import Buttonnyse from "./components/buttonnyse";

function App()
{


  return(

    <div>

    <Nav></Nav>
    <Switch>
    <Route path="/" exact component={Buttonnyse} />
    <Route path="/nyse"  component={Buttonnyse} />


    <Route path="/NASDAQ" component={Button} />
    </Switch>
    </div>
  )
}

export default App;
