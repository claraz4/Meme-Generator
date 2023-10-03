import React from "react"
import "../styles.css"
import trollFace from "../images/troll-face.png"

export default function Navbar() {
    return (
        <div className="navbar--container">
            <div className="navbar--logo">
                <img alt="Troll Face" className="navbar--img" src={trollFace}></img>
                <h3 className="navbar--title">Meme Generator</h3>
            </div>
            <p className="medium-font">React Course - Project 3</p>
        </div>
    )
}