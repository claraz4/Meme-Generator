import React from "react"
import "./styles.css"
import Navbar from "./components/Navbar"
import Meme from "./components/Meme"

export default function App() {
    return (
        <div className="app--container">
            <Navbar />
            <Meme />
        </div>
    )
}