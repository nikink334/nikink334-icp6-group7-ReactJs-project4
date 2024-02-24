import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import instagramImg from './instagram.png';
import twitterImg from './twitter.png';
import facebookImg from './facebook.png';
import youtubeImg from './youtubeF.png';


function Footer() {
    return (

        <footer className="footerM">
    <div className="footer">
        <div>
            <p> <b> Airborne Adventures. </b> </p>
            <p style={{ width: '280px' }}> Airborne Adventures is a premier travel agency dedicated to crafting unforgettable journeys for adventurers worldwide. With a passion for exploration and a commitment to exceptional service, we specialize in curating personalized travel experiences that inspire and delight our customers. </p>
        </div>

        <div>
            <p> <b> Quick Links </b> </p>
            <ul className="linkFooter">
                <li><Link to="/" className="menu">Home</Link></li>
                <li><Link to="/Seats" className="menu">Seats</Link></li>
                <li><Link to="/Destination" className="menu">Destination</Link></li>
                <li><Link to="/Offers" className="menu">Offers</Link></li>
                <li><Link to="/About" className="menu">About</Link></li>
                <li><Link to="/Login" className="menu">Login</Link></li>
            </ul>
        </div>

        <div id="contactID">
            <p> <b> Social Media </b> </p>
            <ul className="linkFooter">
                <li> 
                    <a href="/"> <img className="imageSocial" src={instagramImg} alt="Insta" /> Instagram </a> 
                </li>
                <li> 
                    <a href="/"> <img className="imageSocial" src={twitterImg} alt="Twit" /> Twitter </a> 
                </li>
                <li> 
                    <a href="/"> <img className="imageSocial" src={facebookImg} alt="Face" /> Facebook </a> 
                </li>
                <li> 
                    <a href="/"> <img className="imageSocial" src={youtubeImg} alt="You" /> YouTube</a> 
                </li>
            </ul>
        </div>

        <div>
            <p> <b> Contact </b> </p>
            <ul className="linkFooter">
                <li> <a href="tel: +91 1122334455"> Contact No: +91 8421519931 </a> </li>
                <li> <a href="mailto: airadva123@gmail.com"> Mail To: airadva123@gmail.com </a> </li>
            </ul>
        </div>
    </div>
    <hr/>

    <div className="copyright">
        Copyright &copy; AirborneAdvantures.com | All right are reserved.
    </div>
</footer>

    );
}

export default Footer;
