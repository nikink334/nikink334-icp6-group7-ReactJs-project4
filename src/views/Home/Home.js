import React, { startTransition } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import aeroImg from './place-flying-sunset-sky.jpg';
import secImg from './pexels-tiago-l-br-2497926.jpg'
import { Link } from 'react-router-dom';



function Home() {
  return (

    <div>
      <Navbar />

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Explore the Skies with Ease
          </h1>
          <p className="primary-text">
            Our flight booking system offers a seamless experience, allowing you to effortlessly plan your travels and soar to your desired destinations. With user-friendly interfaces and a wide range of options, booking flights has never been easier. Whether you're jetting off for business or leisure, trust us to provide you with the best deals and smoothest journey possible.
          </p>
          <button className="secondary-button">
            Book Now {" "}
          </button>
        </div>
        <div className="home-bannerImage-container">
          <img src={aeroImg} alt="" />
        </div>
      </div> 
      



      <div className="home-banner-container">
        <div className="home-image-container">
          <img src={secImg} alt="" />
        </div>
        <div className="home-info-section">
          <h3 className='secHead'> About &nbsp; &nbsp;  </h3>
          <h1 className="info-heading">
            Explore the Skies with Ease
          </h1>
          <p className="info-text">
            Our flight booking system offers a seamless experience, allowing you to effortlessly plan your travels and soar to your desired destinations. With user-friendly interfaces and a wide range of options, booking flights has never been easier. Whether you're jetting off for business or leisure, trust us to provide you with the best deals and smoothest journey possible.
          </p>


          <div className="button-container">
            <Link to="/about" className="info-button">
              Learn More
            </Link>
            <Link to="/about" className="info-button">
              Watch Video
            </Link>
          </div>

        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Home;
