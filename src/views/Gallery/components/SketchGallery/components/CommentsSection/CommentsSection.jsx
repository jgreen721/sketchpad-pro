import React, {useState} from 'react'
import {AddComment,CommentItem,CloseBtn} from "./components"
import "./CommentsSection.css"
import { useGalleryContext } from '../../../../../../context/GalleryContext';

const CommentsSection = ({galleryItem}) => {
    const {comments,setSelectedItem,selectedItem} = useGalleryContext([]);
  return (
    <div className="comments-parent-section"> 
    {/* <div className={`comments-section`}> */}
    <CloseBtn setSelectedItem={setSelectedItem}/>
      <div className="comment-section-content">
        <div className="comment-section-content-row">
            <div className="comment-section-col">
              <img className="comment-section-img" src={selectedItem.url} alt="" />
            </div>
            <div className="comment-section-col comments-section">
              <AddComment galleryItem={galleryItem}/>
              {comments.filter(comment=>comment.imageTitle == galleryItem.title).map(comment=>(
                <CommentItem key={comment.id} comment={comment}/>
              ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default CommentsSection