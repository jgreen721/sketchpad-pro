import React from 'react'
import {Link} from "react-router-dom"
import "./LandingContent.css"

const LandingContent = () => {



  return (
    <div className="landing-content-container">
      
      <div className="landing-header-and-btn">
        <div className="landing-header">
          <div className="landing-header-column">
            <div className="landing-header-text-row landing-header-text">
            <h1 style={{"--i":"1s"}} className="pixel-font absolute-text fade-in">Sketchpad</h1>
            <h1 style={{"--i":"1.5s"}} className="pixel-font absolute-text fade-in">Sketch<span className="shadow-gradient">p</span>ad</h1>
            <h1 style={{"--i":".25s"}} className="pixel-font slide-right-text landing-header-text"><span className="gradient-text">Sketch</span></h1>
            <h1 style={{"--i":".65s"}} className="pixel-font lower-down-text"><span style={{"--i":"1s"}} className="fade-in">p</span>
            <span className="gradient-text">ad</span>
            </h1>
            </div>
          </div>
          <div className="landing-header-column landing-header-text">
          <h1 className="pixel-font absolute-text"><span className="invisible">Sketchp</span><span style={{"--i":"1.25s"}} className="shadow-gradient fade-in">r</span><span className="invisible">o</span></h1>
            <h1 className="pixel-font absolute-bottom-text"><span className="invisible">Sketchpr</span><span style={{"--i":"1.75s"}} className="shadow-gradient fade-in">o</span></h1>
            <h1 className="pixel-font"><span className="invisible">Sketchp</span><span style={{"--i":"1.75s"}} className="fade-in">r</span><span className="invisible">o</span></h1>
            <h1 className="pixel-font"><span className="invisible">Sketchpr</span><span style={{"--i":"2.25s"}} className="fade-in">o</span></h1>

          </div>
        </div>
        <div className="landing-btn-container">
          <button style={{"--i":"1.5s"}} className="fade-in link-btn">
            <Link className="landing-link-btn" to="/gallery">
              Gallery
          </Link>
          </button>
          <button style={{"--i":"1.75s"}} className="fade-in link-btn">            
            <Link className="landing-link-btn" to="/sketchpad">
                SketchPad
            </Link>
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default LandingContent