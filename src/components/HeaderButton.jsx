import React from 'react'
import './HeaderButton.css'

function Headerbutton() {
    return (
        <div className='main-container'>
            <div className='button-container'>
                <button className='enter'><a className='button-link' href='#about'>Enter Portfolio<i class='fas fa-arrow-down'></i></a></button>
                <button className='git'>  <a className='button-link' href='https://github.com/Deaano'>Github<i class="fab fa-github-square git-square"></i></a></button>
            </div>
        </div>
    )
}



export default Headerbutton
