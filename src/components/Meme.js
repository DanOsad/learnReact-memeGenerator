import React, {useState} from "react"
import memesData from "../memesData"

export default function Meme() {
    /* SET STATE */
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

     
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
                ...prevState,
                [name]: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <div className='form-input'>
                    <input 
                        type='text' 
                        className='form-text' 
                        placeholder='Top Text' 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type='text' 
                        className='form-text' 
                        placeholder='Bottom Text'
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    className='form-btn'
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}