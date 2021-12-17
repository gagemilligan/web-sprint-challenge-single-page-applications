import react from "react"
import Finished from "./components/Finished"

const Order = (props) => {
    console.log(props)

    const {model} = useParams()

    return (
        <div>
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
            </form>
        </div>
    )
}

export default Order