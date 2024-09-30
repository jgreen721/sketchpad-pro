import React from 'react'
import { useGalleryContext } from '../../../../context/GalleryContext'
import { GalleryItem,NoGalleryDisplay,CommentsSection,EditArt } from './components'
import "./SketchGallery.css"

const SketchGallery = () => {
  const {galleryItems,isEmpty,selectedItem,comments,imageToEdit} = useGalleryContext();
  return (
    <div className="sketch-gallery-parent">
      {galleryItems.length > 0 ? 
      <>
      <ul className="gallery-items-list">
      
        {galleryItems.map((galleryItem,idx)=>(
          <GalleryItem key={galleryItem.id} rotation={galleryItem.rotation} delay={idx/2} galleryItem={galleryItem}/>
        ))}
  
      </ul>
      {selectedItem && <CommentsSection galleryItem={selectedItem} comments={comments.filter(c=>c.imageTitle == selectedItem.title)}/>}
      </>
        : isEmpty
        ?
      <NoGalleryDisplay text="Aww, the gallery is empty! 😢"/>
      :
      <NoGalleryDisplay text="Loading...🕥"/>
        }
        {imageToEdit &&  <EditArt/>}
    </div>
  )
}

export default SketchGallery