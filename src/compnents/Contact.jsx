import React from 'react'
import './Contact.css'
import {useState} from 'react';


function Contact() {
    
    const [contactSection,setContactSection] = useState(false);
    
    function clickHandler () {
        setContactSection(true)
    }

    if (!contactSection){
    return (
    <div className='container-cover'>
        
    <div className='contact-container'>
            <h2 className='contact-title'>Like What You See? Get In Touch.</h2>
        
        <div className='contact-button-container'>
            <button className='contact-button' onClick={clickHandler}>You Wont Reget It</button>
        </div>
        
    </div>
    
    </div> 
    )
    } else {
        return (
    <div className='container-cover'>
            
    <div className='contact-container'>
           <h2 className='clicked-title'>Contact me at any time of the day, Through either of these ways :)</h2>
           
        <div className='icon-container'>
            <span className='contact-icons'><a href='https://www.linkedin.com/in/dean-ward-92898b1a0/' className='contact-link'><i class="fab fa-linkedin linked"></i></a></span>
            <span className='contact-icons'><a href="mailto:dean.leeward@gmail.com" className='contact-link'><i class="fas fa-envelope-square email"></i></a></span>
            <span className='contact-icons'><a href="tel:07547986103" className='contact-link'><i class="fas fa-phone-square-alt phone"></i></a></span>
        </div>
    </div>
        
    </div>
    )}
    
}

export default Contact
