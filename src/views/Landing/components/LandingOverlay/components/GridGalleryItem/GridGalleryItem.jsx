import React from 'react'
import "./GridGalleryItem.css"

const GridGalleryItem = ({item}) => {
  return (
    <div style={{"--i":`${(item.id/2).toFixed(2)}s`}} className={`grid-gallery-img-div ${item.className} fade-in`} key={item.id}>
    <div style={{"--duration":`${(Math.random() * 8.5 | 0) + 10}s`}} className="grid-gallery-img-card">
      <img className={`gallery-img`} src={item.img} alt="gallery-img"/>
    </div>
  </div>
  )
}

export default GridGalleryItem