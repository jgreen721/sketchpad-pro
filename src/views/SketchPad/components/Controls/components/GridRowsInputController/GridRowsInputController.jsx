import React, {useEffect, useState} from 'react'
import { ConfirmToaster } from '../../../../../../components';
import { useAppContext } from '../../../../../../context/AppContext';
import "./GridRowsInputController.css";


const GridRowsInputController = ({rows}) => {
  const {handleGridSize} = useAppContext();
  const [max,setMax] = useState(50);
  const [min,setMin] = useState(10);
  const [step,setStep] = useState(10)
// console.log("WTFF???")
  useEffect(()=>{
    if(innerWidth < 650){
      setMax(30);
      setMin(5);
      setStep(5)
    }
  },[])

  onresize=()=>{
    // console.log("resizing!")
    if(innerWidth < 650){
      console.log('small screen range!!')
      setMax(30)
      setMin(5)
      setStep(5)
    }
    else{
      setMax(50)
      setMin(10)
      setStep(10)
    }
  }
  return (
    <div className="grid-size-selector controls-middle-section controls-section">
      <div className="grid-size-selector-div">
      <input onClick={(e)=>handleGridSize(e.target.value)} onChange={(e)=>handleGridSize(e.target.value)} type="range" step={step} min={min} defaultValue={max/2} max={max} className="range-input" />
      <small className="rows-small-label">{rows} x {rows}</small>
    </div>
    <ConfirmToaster/>
  </div>
  )
}

export default GridRowsInputController