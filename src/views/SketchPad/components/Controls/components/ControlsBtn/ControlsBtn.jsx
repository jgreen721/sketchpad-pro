import React from 'react'
import "./ControlsBtn.css"

const ControlsBtn = ({handleAction,action,label,section,isActive,colorClass}) => {
  return (
        <button onClick={()=>handleAction(action,section)} className={isActive ? `controls-btn ${colorClass} active-btn` : `controls-btn ${colorClass}`}>{label}</button>
        )
}

export default ControlsBtn