import { values } from "cypress/types/lodash"
import React from "react"
import { onChange, Switch, Route } from 'react-router-dom'
import Finished from "./components/Finished"

const Order = (props) => {
    console.log(props)

    

    return (
        <div className = "orderForm">
            Order form for model
            <form>
                <label>
                    Size:
                    <select
                    onChange = {onChange}
                    value = {values.Size}>
                        <option value = "10 inch">10 inch</option>
                        <option value = "14 inch">14 inch</option>
                        <option value = "18 inch">18 inch</option>
                    </select>
                </label>
                <label>
                    Crust:
                    <select
                    onChange = {onChange}
                    value = {values.Crust}>
                        <option value = "Hand Tossed">Hand Tossed</option>
                        <option value = "Thin">Thin</option>
                        <option value = "Gluten Free">Gluten Free</option>
                        <option value = "Stuffed">Stuffed</option>
                    </select>
                </label>
                <label>
                    <select
                    onChange = {onChange}
                    value = {values.Sauce}>
                        <option value = "Classic">Classic</option>
                        <option value = "BBQ">BBQ</option>
                        <option value = "Ranch">Ranch</option>
                        <option value = "Olive oil">Olive oil</option>
                    </select>
                </label>
                <label>
                    <select
                    onChange = {onChange}
                    value = {values.Cheese}>
                    <option value = "House Blend">House Blend</option>
                    <option value = "Extra Cheese">Extra Cheese</option>
                    </select>
                </label>
                <label>
                    <input
                    type = 'checkbox'
                    name = 'Pepperoni'
                    checked ={values.Pepperoni}
                    onChange={onChange}
                    />
                    <input
                    type = 'checkbox'
                    name = 'Sausage'
                    checked ={values.Sausage}
                    onChange={onChange}
                    />
                    <input
                    type = 'checkbox'
                    name = 'Bacon'
                    checked ={values.Bacon}
                    onChange={onChange}
                    />
                    <input
                    type = 'checkbox'
                    name = 'Olives'
                    checked ={values.Olives}
                    onChange={onChange}
                    />
                    <input
                    type = 'checkbox'
                    name = 'Peppers'
                    checked ={values.Peppers}
                    onChange={onChange}
                    />
                    <input
                    type = 'checkbox'
                    name = 'Mushrooms'
                    checked ={values.Mushrooms}
                    onChange={onChange}
                    />
                </label>
            </form>
            <Switch>
                <Route path = '/Finished'>
                    <Finished/>
                </Route>
            </Switch>
        </div>
    )
    
}



export default Order