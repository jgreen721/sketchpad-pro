import React from 'react'
import "./ControlsBtn.css"

const ControlsBtn = ({handleAction,action,label,section,isActive}) => {
  return (
        <button onClick={()=>handleAction(action,section)} className={isActive ? "controls-btn active-btn" : "controls-btn"}>{label}</button>
        )
}

export default ControlsBtn