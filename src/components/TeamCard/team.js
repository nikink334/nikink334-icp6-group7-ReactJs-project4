import React from 'react'
import "./team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faLinkedin, faInstagram , faFacebook} from '@fortawesome/free-brands-svg-icons'

function team({Name,position,image,description}) {
  return (
    <div className='container'>
         <div className='Team-item'>
                    <img className='team-image'  src={image}/>
                    <h3 className='text-center color-blue'>{Name}</h3> 
                      <p className='text-center'>{position}</p>
                      <br/>
                      <p>{description}</p>
                      <ul className='social-links'>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} className='icon' /> </a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin}  className='icon'/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram}  className='icon'/> </a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook}  className='icon'/></a></li>
                      </ul>
                
            </div>  

    </div>
  )
}

export default team