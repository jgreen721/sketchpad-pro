import React from 'react'
import { spaceBg } from '../../../../const'
import "./BgOverlay.css"

const BgOverlay = () => {
  return (
    <div className="bg-img-overlay">
    <img className="bg-overlay-img" src={spaceBg} alt="" />
  </div>
  )
}

export default BgOverlay