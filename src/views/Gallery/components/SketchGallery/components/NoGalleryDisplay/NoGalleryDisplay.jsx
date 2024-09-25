import React from 'react'
import "./NoGalleryDisplay.css"

const NoGalleryDisplay = ({text}) => {
  return (
    <div className="empty-container">
      <div className="empty-content-card">
      <h1>{text}</h1>
      </div>

    </div>
  )
}

export default NoGalleryDisplay