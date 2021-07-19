import React from 'react'
import './Projects.css'
import Fade from 'react-reveal/Fade'
import ProjectCard from './ProjectCard'
import projectInfo from '../projectInfo'




function Projects(props) {
    return (
        <div className='project-container'>
        
        <Fade down>
        <div className='project-header-container'>
        
        <h2 className='project-header'> My Work</h2>
        
        </div>
        </Fade>
        <div className='project-card-container'>
        {projectInfo.map(props =>
        <ProjectCard 
        key={props.id}
        pic={props.pic}
        content={props.content}
        link={props.link}
        github={props.github}
      />)}

      
         
        </div>
        </div>
        
    )
}

export default Projects