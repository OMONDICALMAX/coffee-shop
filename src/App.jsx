import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/home/Body";
import Shop from "./components/shop/Shop";
import Footer from "./components/Footer";
import Admin from "./components/adminportal/Admin";
import useCoffees from "./hooks/useCoffees";
import "./App.css"

function App() {
  const { coffees, setCoffees } = useCoffees();

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/shop" element={<Shop coffees={coffees} setCoffees={setCoffees} />} />
        <Route path="/admin" element={<Admin setCoffees={setCoffees} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;