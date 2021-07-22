import React from 'react'
import Fade from 'react-reveal/Fade'
import './ProjectCard.css'


function ProjectCard(props) {
    return (
    <div>
        <div>
    <Fade>
        <div className='project-card'>
        
        <div className='project-img-container'>
            <img className='project-img' src={props.pic} alt ='' />
        </div>
        
        <div className='project-content-container'>
            <p className='project-content'>{props.content}</p>
        </div>
        
        <div className='project-button-container'>
            <button className='project-buttons'><a className='project-button-link' href={props.link}>Visit Site</a></button>
            <button className='project-buttons'><a className='project-button-link' href={props.github}>Visit Github</a></button>
        </div>
        
        
        </div>
    </Fade>
        </div> 
    </div>
    )
}

export default ProjectCard
