import React from 'react'
import "./BgOverlay.css"

const BgOverlay = ({src}) => {
    return (
      <div className="bg-img-overlay">
      <img className="bg-overlay-img" src={src} alt="" />
    </div>
    )
  }
  
  export default BgOverlay