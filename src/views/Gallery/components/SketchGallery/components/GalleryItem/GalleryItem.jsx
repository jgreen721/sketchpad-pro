import React, {useState} from 'react'
import {FaThumbsUp,FaFaceLaugh,FaComment,FaHeart} from "react-icons/fa6"
import { useGalleryContext } from '../../../../../../context/GalleryContext';
import { ReactionItem,ImgActionRow } from './components';
import "./GalleryItem.css";


const GalleryItem = ({galleryItem,delay,rotation}) => {
    const {handleAction,comments} = useGalleryContext();
    // console.log("Comments",comments)

    const reactionsData = [
        {id:1,icon:<FaThumbsUp/>,action:"like",total:galleryItem.likes,color:"rgb(35,45,100)"},
        {id:2,icon:<FaFaceLaugh/>,action:"laugh",total:galleryItem.laugh,color:"rgb(200,250,5)"},
        {id:3,icon:<FaComment/>,action:"comment",total:comments.filter(c=>c.imageTitle == galleryItem.title).length,color:"white"},
        {id:4,icon:<FaHeart/>,action:"love",total:galleryItem.love,color:"rgb(235,15,25)"},
    ]
    // console.log(galleryItem)
    // const [showComments,setShowComments] = useState(false)

    const handleGalleryItemAction = (action)=>{
        console.log("action",action)
        handleAction(galleryItem,action)
     
    }
  return (
    <div style={{"--i":`${delay}s`,transform:`rotate(${rotation}deg)`}} className={`gallery-item fade-in`}>
        <div className="gallery-item-img-container">
            <img className="gallery-img" src={galleryItem.url} alt="" />
            <ImgActionRow/>
        </div>
        <div className="gallery-item-content-container">
            <div className="gallery-item-content-overlay"></div>
            <div className="gallery-item-content">
                <div className="title-author-row">
                    <h4 className="gallery-item-title">{galleryItem.title}</h4>
                    <h4 className="thin">By: <span className="gallery-item-author">{galleryItem.author}</span></h4>
                </div>
                <h5 className="gallery-item-description"><span className="bold">Description</span>: {galleryItem.description}</h5>

                <div>
                    <div className="reaction-btns-div">
                        {reactionsData.map(btn=>(
                            <ReactionItem key={btn.id} handleEvent={handleGalleryItemAction} btn={btn}/>
                        ))}
                    </div>
                </div>
            </div>

        </div>
     </div>

  )
}

export default GalleryItem