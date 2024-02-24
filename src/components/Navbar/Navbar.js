import { Link } from "react-router-dom";
import "./Navbar.css";
import flightImg from './aeroplane-flight.svg'

export default function Navbar() {
    return (
        
        <nav className="navbar">
            <div className="leftSide"> <img src={flightImg} alt="flightlogo" className="flightLogo"/> Airborne Adventures </div>
            <div className="rightSide">
                <ul className="navUL">
                    <li><Link to="/" className="menuItems">Home</Link></li>
                    <li><Link to="/Seats" className="menuItems">Seats</Link></li>
                    <li><Link to="/Destinastion" className="menuItems">Destination</Link></li>
                    <li><Link to="/Offers" className="menuItems">Offers</Link></li>
                    <li><Link to="/About" className="menuItems">About</Link></li>
                    <li><Link to="/SignUp" className="menuItems">SignUp</Link></li>
                    <li><Link to="/Login" className="menuItems">Login</Link></li>
                </ul>
            </div>
        </nav>

    )
}