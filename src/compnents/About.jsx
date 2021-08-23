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
                <p className='about-me-paragraph'>
                    I have been doing Web Development for about 1 year now and i am continuing on work towards mastering my craft. 
                    I have experience in languages and frameworks, ranging from JavaScript, ReactJS, Material UI, Bootstrap, NodeJS, Git, HTML and CSS. 
                    My passion for problem solving, Coding and making great eye catching websites fuels the love I have for my work.
                </p> 
            </div>
        </Fade>
    </div>
    )
}

export default About
