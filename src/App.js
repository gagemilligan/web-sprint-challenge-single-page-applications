import React, { useState } from "react";
import {Link, Switch, Route} from "react-router-dom"
import * as yup from "yup"
import Finished from "./components/Finished"
import Order from "./components/Order"
import "./App.css";


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Your favorite food, delivered while coding.</p>
    </>
  );
};
export default App;
