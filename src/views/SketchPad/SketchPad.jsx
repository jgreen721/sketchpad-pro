import React from 'react'
import { Navbar,BgOverlay } from '../../components'
import {Controls, SketchGrid,ImgCanvas} from "./components"
import {spaceBg2} from "../../const"
import "./SketchPad.css"

const SketchPad = () => {
  // const BG_COLOR = "white"


  

  return (
    <div>
      <BgOverlay src={spaceBg2}/>
        <div className="sketch-pad-parent view-container">
            <div className="sketchpad-content">
            <Navbar link="/gallery" linkName="Gallery"/>
              <div className="sketchpad-content-row">
                <div className="controls-column">
                  <Controls/>
                </div>
                <div className="sketchpad-grid-column">
                  <SketchGrid/>
                </div>
              </div>
            </div>
        <ImgCanvas/>
      </div>
   </div>
  )
}

export default SketchPad