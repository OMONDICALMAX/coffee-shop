import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/home/Body";
import Shop from "./components/shop/Shop";
import Footer from "./components/Footer";
import Admin from "./components/adminportal/Admin";
import "./App.css";

function App() {
    const [coffees, setCoffees] = useState([]);

    function addCoffee(newCoffee) {
        setCoffees([...coffees, newCoffee]);
    }

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/shop" element={<Shop coffees={coffees} />} />
                <Route path="/admin" element={<Admin addCoffee={addCoffee} />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;