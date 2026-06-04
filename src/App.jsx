import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/home/Body";
import Shop from "./components/shop/Shop";
import Footer from "./components/Footer";
import "./App.css";
import Admin from "./components/adminportal/Admin";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/admin" element={<Admin/>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;