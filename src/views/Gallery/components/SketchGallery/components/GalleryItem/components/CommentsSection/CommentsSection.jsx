import React, {useState} from 'react'
import {AddComment,CommentItem} from "./components"
import "./CommentsSection.css"
import { useGalleryContext } from '../../../../../../../../context/GalleryContext';

const CommentsSection = ({showComments,setShowComments,galleryItem}) => {
    const {comments} = useGalleryContext([]);
  return (
    <div className={`comments-section ${showComments ? 'show-comments' : 'hide-comments'}`}>
      <div className="close-comments-btn-row">
      <button onClick={()=>setShowComments(false)} className="close-comments-btn">x</button>
      </div>
        <AddComment galleryItem={galleryItem}/>
        {comments.filter(comment=>comment.imageTitle == galleryItem.title).map(comment=>(
            <CommentItem key={comment.id} comment={comment}/>
        ))}
    </div>
  )
}

export default CommentsSection