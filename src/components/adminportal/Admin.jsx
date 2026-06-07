import { useState } from "react";

function Admin({ setCoffees }) {
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

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((newCoffee) => {
        // update UI immediately
        setCoffees((prev) => [...prev, newCoffee]);

        // reset form
        setFormData({
          coffeeName: "",
          description: "",
          origin: "",
          price: ""
        });
      })
      .catch((error) => {
        console.error("Error adding coffee:", error);
      });
  }

  return (
    <div className="coffeeForm">
      <h2>Add New Coffee</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="coffeeName"
          placeholder="Coffee name"
          value={formData.coffeeName}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          name="origin"
          placeholder="Origin"
          value={formData.origin}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <button type="submit" className="welcomeBTN">
          Add Coffee
        </button>
      </form>
    </div>
  );
}

export default Admin;