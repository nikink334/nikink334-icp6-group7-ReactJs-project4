import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import TeamCard from '../../components/TeamCard/team'
import { TEAM_DATA } from '../../config/Team'
import Image from './flightImage.jpg'
import Footer from '../../components/Footer/Footer';


function About() {
  return (
    <div> 

      <Navbar/>
       <h2 className='heading'>About Us</h2>
      
      <div className='about-container'>
      <img className='flight-img' src={Image}/>
        <span>
        <p className='subtitle'>Welcome to Airborne Adventures, <br/> Your premier destination for hassle-free flight booking! </p>
        <p className='description'>  Founded with a passion for travel and a commitment to exceptional service, we strive to make your journey seamless from start to finish. Our dedicated team of experts is here to cater to your every need, ensuring that every aspect of your flight booking experience exceeds your expectations. Whether you're jet-setting for business or leisure, trust Airborne Adventures to elevate your travel experience and make your next adventure unforgettable. Explore our user-friendly platform and discover why travelers around the globe choose us for their flight booking needs. Welcome aboard!</p>
         
        </span>
      </div>
     
        <div>
          <br/>  <br/>  <br/>  <br/>
                <h2 className='heading'>Our Team</h2>
                <br/>  <br/>  <br/> 
        </div>
         <div className='container'>
        {
          TEAM_DATA.map((teamObj,index)=>{
            const {Name,image,position,description}=teamObj;

            return <TeamCard   Name={Name} image={image} position={position} description={description} key={index}/>

          })
        }
    </div>
    <Footer/>
    </div> 
  
       )
      }  
   export default About 

   

