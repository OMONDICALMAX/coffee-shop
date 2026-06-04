import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="bar">
            <Link className="button" to="/">Home</Link>
            <Link className="button" to="/shop">Shop</Link>
            <Link className="button" to="/admin">Admin Portal</Link>
        </div>
    );
}

export default Header;