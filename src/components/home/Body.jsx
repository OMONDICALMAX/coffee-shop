import { Link } from "react-router-dom";
function Body(){
    return(
        <div className="welcome">
        <h1 className="welcome-text">Savanna Coffee House</h1>
        <p className="welcome-paragraph">Where Every Sip Feels Like Sunrise <br />On The Savanna.</p>
        <Link to = "/shop">
           <button className="welcomeBTN">Visit Our Shop</button>
        </Link>
        
        </div>
        
    )


}
export default Body