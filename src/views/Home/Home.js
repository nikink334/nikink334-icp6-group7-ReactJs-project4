import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import aeroImg from './place-flying-sunset-sky.jpg';
import secImg from './pexels-tiago-l-br-2497926.jpg'
import { Link } from 'react-router-dom';
import { howCards } from '../../config/homecard';
import HomeCard from '../../components/HomeCard/HomeCard';
import { reviewCards } from '../../config/reviewcard';
import ReviewCard  from '../../components/ReviewCard/ReviewCard';

function Home() {
  return (

    <div>
      <Navbar />

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Explore the Skies with Ease !
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
          <h1 className="info-heading"> About Airborne Adventures. </h1>
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

      <br /><br /> <br />

      <div className='howItWork'>
        <div className="howItWork-content">
          <h2 className="primary-heading"> How To  Book Flights ? </h2>
          <p className="primary-text">
            Planning your trip is simple. Explore our vast selection of destinations, choose your ideal flights, and get ready for an unforgettable journey. Whether it's a business trip or a vacation, we've got you covered every step of the way.
          </p>
        </div>
      </div> <br />

      <div className="home-card-wrapper">
        {howCards.map((card, index) => (
          <HomeCard
            key={index}
            thumbnail={card.thumbnail}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

  
      <div className='reviewSection'>
        <div className='review-page-wrapper'>
          <p className='reviewHead'>What Customers Are Saying About Us.</p> <br />
          <p className='reviewDesc'>
            Discover what our customers are saying about their experiences. Read authentic reviews and testimonials from
            travelers just like you. From destination insights to service feedback, our reviews provide valuable insights
            to help you plan your next adventure with confidence.
          </p>
        </div>
        <br />
        <br />

        <div className='review-card-wrapper'>
          {reviewCards.map((feedback, index) => (
            <ReviewCard
              key={index}
              thumbnail={feedback.thumbnail}
              title={feedback.title}
              description={feedback.description}
            />
          ))}
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='lastBtn'>
        <button className='info-button'> Read more ..! </button>
      </div>  <br/><br/>
      <div className="contact-page-wrapper">
        <p className="contactHead">Have Question In Mind? Let Us Help You ! </p> <br />
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button"> Submit </button>
        </div>
      </div> <br /><br />

      <Footer />

      <br /><br />

    </div>
  );
}

export default Home;
