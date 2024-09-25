import React from 'react'
import {GalleryProvider} from "../../context/GalleryContext"
import {Navbar,BgOverlay} from "../../components"
import {SketchGallery} from "./components"
import { spaceBg } from '../../const'
import "./Gallery.css";

const Gallery = () => {
  return (
    <GalleryProvider>
        <BgOverlay src={spaceBg}/>

      <div className="gallery-parent-container view-container">
        {/* <BgOverlay src={spaceBg}/> */}
        <Navbar link="/sketchpad" linkName="Sketchpad"/>
        <SketchGallery/>
       </div>
    </GalleryProvider>
  )
}

export default Gallery