import React, {useRef, useEffect, useState} from 'react'
import { useAppContext } from '../../../../context/AppContext';
import { uploadToFirebase } from '../../../../helpers/imageUpload';
import "./ImgCanvas.css";

const ImgCanvas = () => {
    const {showCanvas,setShowCanvas,gridTiles,bgColor,rows} = useAppContext();
    const [description,setDescription] = useState("");
    const [author,setAuthor] = useState("");
    const [title,setTitle] = useState("");
    const [dimension,setDimension] = useState(0)
    const canvasRef = useRef()
    const imgRef = useRef();
    const downloadRef = useRef();



    useEffect(()=>{
      if(canvasRef.current){
          let ctx = canvasRef.current.getContext("2d");
          let WIDTH = innerWidth > 650 ? 400 : 300;
          let HEIGHT = innerWidth > 650 ? 400 : 300;
          if(rows == 30){
            WIDTH = 420;
            HEIGHT = 420;
          }
        
          canvasRef.current.width = WIDTH;
          canvasRef.current.height = HEIGHT;
          ctx.fillStyle = 'black'
          ctx.fillRect(0,0,500,500)

          class GridCel{
            constructor(x,y,height,width,color){
              this.x = x;
              this.y = y;
              this.height = height;
              this.width = width;
              this.color = color;
            }
      
            draw(){
              ctx.fillStyle = this.color;
              ctx.fillRect(this.x,this.y,this.width,this.height);
              ctx.fill();
            }
          }
          let posX = 0;
          let posY = 0;
          let cels = [];
          // let DIMENSION = Math.floor(WIDTH/rows);
          setDimension(Math.floor(WIDTH/rows))
          // console.log(dimension)
          gridTiles.forEach(tile=>{
            let gridCel = new GridCel(posX,posY,dimension,dimension,tile.isColored ? tile.color : bgColor)
            posX += dimension;
            if(posX >= WIDTH){
              posX = 0;
              posY+=dimension;
            }
            cels.push(gridCel)
          })
          cels.forEach(cel=>cel.draw());
          // ctx.drawImage(imgRef.current,0,0,DIMENSION,DIMENSION);
          imgRef.current.src = canvasRef.current.toDataURL();
          downloadRef.current.setAttribute("href",canvasRef.current.toDataURL())
          downloadRef.current.setAttribute("download",`users-grid-img.png`);
      }
    })


  

    const handleSaveAndShare=async()=>{
      // console.log('handleSaveAndShare fired!',imgRef.current.getAttribute("src"))
      let galleryImg={
        title,
        description,
        author,
        src:imgRef.current.getAttribute("src")
      }
      try{
       let response = await uploadToFirebase(galleryImg);
       setTitle("");
       setDescription("");
       setAuthor("");
      }
      catch(e){
        console.log("Error in firebase upload.\n");
      }

    }


    

  return (
    <div className={`canvas-container ${showCanvas ? 'show-canvas' : 'hide-canvas'}`}>
      <div className="canvas-container-content">
      <button onClick={()=>setShowCanvas(false)} className="cancel-canvas-btn">X</button>
    <div className="canvas-content-row">
      <div className="img-canvas-div-container">
        <canvas className="img-canvas" ref={canvasRef}></canvas>
        <img ref={imgRef} className="user-grid-img" alt="user-img" />
      </div>
        <div className="canvas-inputs-column">
          <div className="form-div">
            <input type="text" name="title" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Give your masterpiece a title!" />
          </div>
          <div className="form-div">
            <input type="text" name="author" className="form-control" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Artist name or remain anonymous!" />
          </div>
          <div className="form-div">
            <textarea className="text-form-control" name="description" placeholder="A little something about your creation" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} cols="30" rows="10"></textarea>
          </div>
          <div className="form-div">
            <div className="canvas-btn-col">
            <button onClick={handleSaveAndShare} className="canvas-action-btn share-btn">Save & Share</button>
            </div>
            <div className="canvas-btn-col">
            {/* <button onClick={handleDownload} className="canvas-action-btns">Download</button> */}
            <a className="canvas-action-download-link canvas-action-btn download-btn" ref={downloadRef}>
              Download
            </a>
            </div>

          </div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default ImgCanvas