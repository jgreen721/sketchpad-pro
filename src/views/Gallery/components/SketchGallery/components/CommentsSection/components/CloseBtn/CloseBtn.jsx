import React from 'react'
import "./CloseBtn.css"

const CloseBtn = ({setSelectedItem}) => {
  return (
    <div className="close-comments-btn-row">
    <button onClick={()=>setSelectedItem(null)} className="close-comments-btn">
      x
    </button>
  </div>
  )
}

export default CloseBtn