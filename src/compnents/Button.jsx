import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <div className='main-container'>
        <div className='button-container'>
            <button className='enter'><a className='button-link' href='/'>Enter Portfolio<i class='fas fa-arrow-down'></i></a></button>
            <button className='git'>  <a className='button-link' href='/'>Github<i class="fab fa-github-square"></i></a></button>
        </div>
        </div>
    )
}



export default Button