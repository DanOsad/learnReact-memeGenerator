import React, {useState} from "react"
import memesData from "../memesData"

export default function Meme() {
    const getRandomMemeUrl = () => {
        const memeArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomIndex].url)
    }

    /* SET STATE */
    const [memeImage, setMemeImage] = useState("")

    return (
        <div className='form'>
            <div className='form-input'>
                <input 
                    type='text' 
                    className='form-text' 
                    placeholder='Top Text' 
                />
                <input 
                    type='text' 
                    className='form-text' 
                    placeholder='Bottom Text' 
                />
            </div>
            <button 
                className='form-btn'
                onClick={getRandomMemeUrl}
            >
                Get a new meme image  🖼
            </button>
            <img src={memeImage} alt='meme' className="meme-img" />
        </div>
    )
}