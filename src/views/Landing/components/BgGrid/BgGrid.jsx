import React, {useRef, useEffect} from 'react'
import "./BgGrid.css"

const BgGrid = () => {
  const gridRef = useRef();


  useEffect(()=>{
    let leftCounter = 0;
    let opacity = 1;
    for(let i=0;i<100;i++){
      let gridCel = document.createElement("div");
      gridCel.className="grid-cel";
      leftCounter++;
      if(leftCounter == 10 || i == 99){
        gridCel.classList.add("grid-border-top")
        if(i == 99)gridCel.classList.add('grid-border-last')
        leftCounter = 0;
      }
      if(Math.random() > .85)gridCel.classList.add("bg-grid-fill")
      if(i >= 90 && i != 99)gridCel.classList.add("grid-border-left")
      gridCel.style.opacity = opacity;
      if(i % 10 == 0)opacity-=.095;
      gridRef.current.appendChild(gridCel);

    }

    return ()=>{
      console.log("clean up")
      if(gridRef.current){
      gridRef.current.innerHTML = "";
      }
    }
  })

  return (
    <div className="login-bg-grid-parent">
      <div style={{"--i":"1.25s"}} ref={gridRef} className="login-bg-grid scale-element"></div>
    </div>
  )
}

export default BgGrid