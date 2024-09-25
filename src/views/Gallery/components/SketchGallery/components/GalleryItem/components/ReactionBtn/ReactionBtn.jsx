import React from 'react'
import "./ReactionBtn.css"

const ReactionBtn = ({icon,action,handleEvent,color}) => {

  return (
    <button onClick={()=>handleEvent(action)} className="reaction-btn">
      <span style={{color}}>{icon}</span>
      <span className="icon-shadow" style={{color}}>{icon}</span>
    </button>

  )
}

export default ReactionBtn