import React from 'react'
import {GalleryProvider} from "../../context/GalleryContext"
import {Navbar,BgOverlay} from "../../components"
import {SketchGallery} from "./components"
import { spaceBg } from '../../const'
import { BsGrid3X3 } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";



import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="full-screen-container">
      <GalleryProvider>
        <BgOverlay src={spaceBg}/>
        <div className="gallery-parent-container view-container">
          <Navbar link="/sketchpad" linkName="Sketchpad" icon={<MdOutlineDraw />}/>
          <SketchGallery/>
        </div>
      </GalleryProvider>
    </div>
  )
}

export default Gallery