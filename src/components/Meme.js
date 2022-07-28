import React from "react"

export default function Meme() {
    return (
        <div className='form'>
            <div className='form-input'>
                <input type='text' className='form-text' placeholder='Top Text'></input>
                <input type='text' className='form-text' placeholder='Bottom Text'></input>
            </div>
            <button type='submit' className='form-btn'>Get a new meme image  🖼</button>
        </div>
    )
}