function Shop({ coffees = [] }) {
    return (
        <div>
            <h2>Our Coffee Collection</h2>

            <div className="coffeeGrid">
                {coffees.length === 0 ? (
                    <p>No coffees added yet ☕</p>
                ) : (
                    coffees.map((coffee, index) => (
                        <div key={index} className="coffeeCard">
                            <h3>{coffee.coffeeName}</h3>
                            <p>{coffee.description}</p>
                            <p><strong>Origin:</strong> {coffee.origin}</p>
                            <p><strong>Price:</strong> {coffee.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Shop;