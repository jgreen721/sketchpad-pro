import React from 'react'
import "./CommentItem.css"

const CommentItem = ({comment}) => {
  return (
    <div className="comment-item">
      <h3 className="comment-text">{comment.comment}</h3>
      <h5 className="comment-author"><span className="thin">By:</span> {comment.author}</h5>
    </div>
  )
}

export default CommentItem