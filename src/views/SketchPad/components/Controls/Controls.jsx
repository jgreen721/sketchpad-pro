import React, {useState} from 'react'
import {ConfirmToaster} from "../../../../components"
import {useAppContext} from "../../../../context/AppContext"
import { ColorSelectInput,ControlsBtn, GridRowsInputController } from './components';
import "./Controls.css";


const Controls = () => {
  const [topBtns,setTopBtns] = useState([
    {id:1,name:"Draw",action:"draw",isActive:true,colorClass:"default-control-btn"},
    {id:2,name:"Color Grabber",action:"grab",isActive:false,colorClass:"default-control-btn"},
    {id:3,name:"Toggle Eraser",action:"erase",isActive:false,colorClass:"default-control-btn"},
    {id:4,name:"Toggle Rainbow",action:"rainbow",isActive:false,colorClass:"default-control-btn"},
      ])
  const [bottomBtns,setBottomBtns] = useState([
    {id:1,name:"Save",action:"save",isActive:false,colorClass:"save-control-btn"},
    {id:2,name:"Clear",action:"clear",isActive:false,colorClass:"clear-control-btn"},
    {id:3,name:"Take Picture",action:"picture",isActive:false,colorClass:"take-picture-btn"},
  ])
  const {handleGridSize,color,bgColor,rows,handleBtnAction,setShowCanvas} = useAppContext();


  const handleAction=(action,section)=>{
    // console.log("handle Action fired!");
    if(section == "top"){
      setTopBtns((topBtns)=>topBtns.map(t=>t.action == action ? {...t,isActive:true} : {...t,isActive:false}))

    }
    handleBtnAction(action,section);

    

    
  }

  return (
    <div className="controls-container">
      <div className="controls-bg-overlay"></div>
      <div className="control-container-content">
      <div className="controls-color-section controls-section">
        <ColorSelectInput label="Pen Color" action="brush" color={color}/>
        <ColorSelectInput label="Bg Color" action="background" color={bgColor}/>
      </div>
      <div className="controls-top-section controls-section">
      {topBtns.map(btn=>(
        <ControlsBtn key={btn.id} section="top" isActive={btn.isActive} handleAction={handleAction} action={btn.action} label={btn.name}/>
      ))}
      </div>
    
        <GridRowsInputController rows={rows}/>
      
      <div className="controls-top-section controls-section">
      {bottomBtns.map(btn=>(
        <ControlsBtn key={btn.id} section="bottom" isActive={btn.isActive} colorClass={btn.colorClass} handleAction={handleAction} action={btn.action} label={btn.name}/>

      ))}
      </div>
      </div>
    </div>
  )
}

export default Controls