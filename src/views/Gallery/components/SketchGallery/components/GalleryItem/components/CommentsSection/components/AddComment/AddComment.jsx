import React, {useState} from 'react'
import { useGalleryContext } from '../../../../../../../../../../context/GalleryContext';
import "./AddComment.css";


const AddComment = ({galleryItem}) => {
  const [comment,setComment] = useState("")
  const [author,setAuthor] = useState("");
  const {addComment} = useGalleryContext();

  const handleAddComment = ()=>{
    let commentItem={
      author,
      comment,
    }
    addComment(commentItem,galleryItem);

  }


  return (
    <div className="add-comment-section">
      <div className="comment-form-div">
        <input type="text" className="form-control" name="comment" autoComplete="off" value={comment} placeholder="Add Comment" onChange={(e)=>setComment(e.target.value)} />
      </div>
      <div className="comment-form-div">
        <input type="text" className="form-control" name="author" autoComplete="off" value={author} placeholder="Author" onChange={(e)=>setAuthor(e.target.value)} />
        <button onClick={handleAddComment} className="add-comment-btn">Send</button>
      </div>
    </div>
  )
}

export default AddComment