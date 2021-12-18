import React, { useState } from "react";
import {Link, Switch, Route} from "react-router-dom"
import Finished from "./components/Finished"
import Order from "./components/Order"
import "./App.css";



const initialOrderForm = {
  Size: "",
  Crust: "",
  Sauce: "",
  Cheese: "",
  Toppings: "",
}

const initialOrderFormErrors = {
  Size: "",
  Crust: "",
  Sauce: "",
  Cheese: "",
  Toppings: "",
}

function App () {

const [pizza, setPizza] = useState({})
const [formValue, setFormValues] = useState(initialOrderForm)
const [formErrors, setFormErrors] = useState(initialOrderFormErrors)
const [disabled, setDisabled] = (true)

  return (
    <div className = "App">
    <header>
      <h1>Lambda Eats</h1>
      <p>Your favorite food, delivered while coding.</p>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "./components/Order">Order Pizza</Link>
      </nav>
    </header>
    <main>
      <Switch>
      <Route path = '/Order/:model'><Order/>
      </Route>
      </Switch>
    </main>
    </div>
  );
};
export default App;
