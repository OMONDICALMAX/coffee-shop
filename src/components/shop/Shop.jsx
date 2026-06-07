import { useState } from "react";

function Shop({ coffees = [], setCoffees }) {
  const [search, setSearch] = useState("");

  // PATCH request (update price)
  function updatePrice(id, newPrice) {
    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price: newPrice })
    })
      .then((res) => res.json())
      .then((updatedCoffee) => {
        setCoffees((prev) =>
          prev.map((coffee) =>
            coffee.id === id ? updatedCoffee : coffee
          )
        );
      });
  }

  const filtered = coffees.filter((coffee) =>
    coffee.coffeeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Our Coffee Collection</h2>

      {/* SEARCH FUNCTIONALITY */}
      <input
        placeholder="Search coffee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="coffeeGrid">
        {filtered.map((coffee) => (
          <div key={coffee.id} className="coffeeCard">
            <h3>{coffee.coffeeName}</h3>
            <p>{coffee.description}</p>
            <p>{coffee.origin}</p>
            <p>{coffee.price}</p>

            {/* PATCH BUTTON */}
            <button onClick={() => updatePrice(coffee.id, 10)}>
              Change Price to 10
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;