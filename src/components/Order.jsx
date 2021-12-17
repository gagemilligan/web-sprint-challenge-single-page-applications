import React from "react"
import { Switch, useParams, Route } from "react-router-dom"
import Finished from "./components/Finished"

const Order = (props) => {
    console.log(props)

    const {model} = useParams()

    return (
        <div className = "orderForm">
            Order form for model {model}
            <form>
                <label>
                    Size:
                    <select name = "Size" id = "Size">
                        <option value = "10 inch">10 inch</option>
                        <option value = "14 inch">14 inch</option>
                        <option value = "18 inch">18 inch</option>
                    </select>
                </label>
                <label>
                    Crust:
                    <select name = "Crust" id = "Crust">
                        <option value = "Hand Tossed">Hand Tossed</option>
                        <option value = "Thin">Thin</option>
                        <option value = "Gluten Free">Gluten Free</option>
                        <option value = "Stuffed">Stuffed</option>
                    </select>
                </label>
                <label>
                    <select name = "Sauce" id = "Sauce">
                        <option value = "Classic">Classic</option>
                        <option value = "BBQ">BBQ</option>
                        <option value = "Ranch">Ranch</option>
                        <option value = "Olive oil">Olive oil</option>
                    </select>
                </label>
                <label>
                    <select name = "Sauce" id = "Sauce">
                    <option value = "House Blend">House Blend</option>
                    <option value = "Extra Cheese">Extra Cheese</option>
                    </select>
                </label>
                <label>
                    <select name = "Toppings" id = "Toppings">
                    <option value = "Pepperoni">Pepperoni</option>
                    <option value = "Sausage">Sausage</option>
                    <option value = "Bacon">Bacon</option>
                    <option value = "Olives">Olives</option>
                    <option value = "Peppers">Peppers</option>
                    <option value = "Mushrooms">Mushrooms</option>
                    </select>
                </label>
            </form>
        </div>
    )
    
}
function Button () {
return (
    <div className="Button">
            <Switch>
                <Route path = './components/Finished'>
                    <Finished pizza />
                </Route>
            </Switch>
            </div>
    )
}

export default {Order, Button}