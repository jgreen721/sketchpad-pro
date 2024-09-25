import React from 'react'
import {gridArt1,gridArt2,gridArt3,gridArt4,gridArt5,gridArt6} from "../../../../const"
import { GridGalleryItem } from './components'
import "./LandingOverlay.css"

const LoginOverlay = () => {
  const gridGallery=[
    {id:1,img:gridArt1,className:"gallery-img-1"},
    {id:2,img:gridArt2,className:"gallery-img-2"},
    {id:3,img:gridArt3,className:"gallery-img-3"},
    {id:4,img:gridArt4,className:"gallery-img-4"},
    {id:5,img:gridArt5,className:"gallery-img-5"},
    {id:6,img:gridArt6,className:"gallery-img-6"},
  ]
  return (
    <div className="landing-overlay-container">
      <div className="overlay-gallery">
        {gridGallery.map(item=>(
            <GridGalleryItem key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default LoginOverlay