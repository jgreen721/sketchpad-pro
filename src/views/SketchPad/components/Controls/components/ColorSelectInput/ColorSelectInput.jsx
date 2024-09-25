import React from 'react'
import { useAppContext } from '../../../../../../context/AppContext'
import "./ColorSelectInput.css"

const ColorSelectInput = ({label,action,color}) => {
  const {handleColorSelect} = useAppContext();
  return (
     <div className="color-section-col">
          <h5>{label}</h5>
          <div style={{backgroundColor:color}} className="pseudo-color-btn"></div>
          <input onChange={(e)=>handleColorSelect(action,e.target.value)} className="color-input" defaultValue={color} type="color" />
    </div>
    
  )
}

export default ColorSelectInput