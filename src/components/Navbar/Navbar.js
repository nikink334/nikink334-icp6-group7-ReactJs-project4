import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar(){
    return(
        
            <div className="navbar">
                <span className="brand">My Website</span>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Destinastion">Destinastion</Link>
                <Link to="/Offers">Offers</Link>
                <Link to="/Seats">Seats</Link>
                <Link to="/SignUp">SignUp</Link>
                <Link to="/Login">Login</Link>
            </div>
        
    )
}