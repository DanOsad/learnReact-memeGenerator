import React from "react"

export default function Header() {
    return (
        <header>
            <div className='logo-title'>
                <img src='images/face.png' alt='meme face' className='header-logo'/>
                <span className='header-title'>Meme Generator</span>
            </div>
            <span className='header-subtitle'>React Course - Project 3</span>
        </header>
    )
}