import React from 'react'
import { useGalleryContext } from '../../../../context/GalleryContext'
import { GalleryItem,NoGalleryDisplay } from './components'
import "./SketchGallery.css"

const SketchGallery = () => {
  const {galleryItems,isEmpty} = useGalleryContext();
  return (
    <div className="sketch-gallery-parent view-container">
      {galleryItems.length > 0 ? 
      <ul className="gallery-items-list">
        {new Array(20).fill(0).map((_,idx)=>(
          <div key={idx}>
        {galleryItems.map(galleryItem=>(
          <GalleryItem key={galleryItem.id} rotation={Math.random() > .5 ? Math.random() * 5 | 0 : (Math.random() * 5 | 0) * -1} delay={idx/2} galleryItem={galleryItem}/>
        ))}
        </div>
        ))}
      </ul>
        : isEmpty
        ?
      <NoGalleryDisplay text="Aww, the gallery is empty! 😢"/>
      :
      <NoGalleryDisplay text="Loading...🕥"/>
        }
    </div>
  )
}

export default SketchGallery