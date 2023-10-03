import React from "react"
import "../styles.css"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        urlImg: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    // Fetching the memes from the API
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function changeMeme() {
        const randomInt = Math.floor(Math.random() * allMemes.length)
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                urlImg: allMemes[randomInt].url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value       
            }
        }
        )
    }

    return (
        <div className="meme--inputs">
            <div className="meme--form">
                <input 
                type="text" 
                autocomplete="off" 
                autofocus 
                placeholder="Top text" 
                className="meme--top_input meme--text_box"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                ></input>
                <input 
                type="text" 
                autocomplete="off" 
                autofocus 
                placeholder="Bottom text" 
                className="meme--bottom_input meme--text_box"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                ></input>
            </div>
            <button onClick={changeMeme} className="meme--button">Get a new meme image  🖼</button>
            <div className="meme--img_container">
                <img alt="Meme" className="meme--img" src={meme.urlImg}></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
        </div>
    )
}