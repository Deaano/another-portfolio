import React from 'react'
import './About-container.css'
import Me from '../compnents/images/me.jpg'
import Fade from 'react-reveal/Fade'

function About() {
    return (
        <div id='about' className='about-container'>
        <Fade left>
            <img className='about-img' alt='' src={Me} />
        </Fade>
        <Fade right>
            <div className='about-text-container'>
            <h3 className='about-me-header'>About Dean Ward</h3>
            <p className='about-me-paragraph'>adipisicing elit. 
            Libero perferendis quod, harum voluptatem odio iusto? Ratione, 
            sint incidunt, debitis vel eligendi temporibus itaque 
            labore consequatur,
             facere aliquam deserunt tempore dolor.
             adipisicing elit. 
            Libero perferendis quod, harum voluptatem odio iusto? Ratione, 
            sint incidunt, debitis vel eligendi temporibus itaque 
            labore consequatur,
             facere aliquam deserunt tempore dolor.</p> 
                   </div>
            </Fade>
            
            </div>
    )
}

export default About
