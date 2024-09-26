import React from 'react'
import { useGalleryContext } from '../../../../context/GalleryContext'
import { GalleryItem,NoGalleryDisplay } from './components'
import { CommentsSection } from './components/GalleryItem/components'
import "./SketchGallery.css"

const SketchGallery = () => {
  const {galleryItems,isEmpty,selectedItem,comments} = useGalleryContext();
  return (
    <div className="sketch-gallery-parent">
      {galleryItems.length > 0 ? 
      <>
      <ul className="gallery-items-list">
        {new Array(20).fill(0).map((_,idx)=>(
          <div key={idx}>
        {galleryItems.map(galleryItem=>(
          <GalleryItem key={galleryItem.id} rotation={Math.random() > .5 ? Math.random() * 5 | 0 : (Math.random() * 5 | 0) * -1} delay={idx/2} galleryItem={galleryItem}/>
        ))}
        </div>
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
    </div>
  )
}

export default SketchGallery