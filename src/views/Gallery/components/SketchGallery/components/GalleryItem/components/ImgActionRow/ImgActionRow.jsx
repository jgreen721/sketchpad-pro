import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoDownloadOutline } from "react-icons/io5";
import { useGalleryContext } from '../../../../../../../../context/GalleryContext';



import "./ImgActionRow.css"

const ImgActionRow = ({item}) => {
  const {setImageToEdit} = useGalleryContext()

    const btns = [
        {id:1,action:"download",icon:<IoDownloadOutline/>,color:"rgb(25,20,200)",onPress:()=>console.log("hello world")},
        {id:2,action:"edit",icon:<FiEdit/>,color:'rgb(145,105,125)',onPress:setImageToEdit},
        {id:3,action:"save",icon:<CiHeart/>, color:'rgb(225,15,25)',onPress:()=>console.log("hello world2")},
    ]
  return (
    <div className="img-actions-container">
        <div className="action-btns">
        {btns.map(btn=>(
            <button onClick={()=>btn.onPress(item)} style={{color:btn.color}} className="img-action-btn" key={btn.id}>{btn.icon}</button>
        ))}
        </div>
    </div>
  )
}

export default ImgActionRow