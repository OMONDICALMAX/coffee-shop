import { useState } from "react";

function Admin({ addCoffee }) {
    const [formData, setFormData] = useState({
        coffeeName: "",
        description: "",
        origin: "",
        price: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit() {
        addCoffee(formData);

        setFormData({
            coffeeName: "",
            description: "",
            origin: "",
            price: ""
        });
    }

    return (
        <div className="coffeeForm">

            <input name="coffeeName" placeholder="Enter Coffee name" onChange={handleChange} value={formData.coffeeName} />
            <input name="description" placeholder="Enter Coffee description" onChange={handleChange} value={formData.description} />
            <input name="origin" placeholder="Enter Coffee origin" onChange={handleChange} value={formData.origin} />
            <input name="price" type="number" placeholder="Enter Price" onChange={handleChange} value={formData.price} />

            <button onClick={handleSubmit} className="welcomeBTN">
                Submit
            </button>
        </div>
    );
}

export default Admin;