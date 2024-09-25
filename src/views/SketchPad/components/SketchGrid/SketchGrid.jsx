import React from 'react'
import { useAppContext } from '../../../../context/AppContext'
import "./SketchGrid.css"

const GridCel=({cel,handleBrushAction})=>{
      const {bgColor} = useAppContext();

    return (
        <div onClick={()=>handleBrushAction(cel.id,true)} onMouseEnter={()=>handleBrushAction(cel.id,false)} style={{backgroundColor:cel.isColored ? cel.color : bgColor}} className={`cel`}></div>
    )
}

const SketchGrid = () => {
    const {gridTiles,handleBrushAction,rows,toggleBrush} = useAppContext();



  return (
    <div onMouseUp={()=>toggleBrush(false)} onMouseDown={()=>toggleBrush(true)} style={{"gridTemplateColumns":`repeat(${rows},1fr)`}} className="sketch-grid">
        {gridTiles.map(gridTile=>(
            <GridCel key={gridTile.id} handleBrushAction={handleBrushAction} cel={gridTile}/>
        ))}
    </div>
  )
}

export default SketchGrid