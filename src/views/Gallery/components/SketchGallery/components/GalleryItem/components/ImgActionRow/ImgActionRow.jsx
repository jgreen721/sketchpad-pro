import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoDownloadOutline } from "react-icons/io5";



import "./ImgActionRow.css"

const ImgActionRow = () => {
    const btns = [
        {id:1,action:"download",icon:<IoDownloadOutline/>,color:"rgb(25,20,200)"},
        {id:2,action:"edit",icon:<FiEdit/>,color:'rgb(145,105,125)'},
        {id:3,action:"save",icon:<CiHeart/>, color:'rgb(225,15,25)'},
    ]
  return (
    <div className="img-actions-container">
        <div className="action-btns">
        {btns.map(btn=>(
            <button style={{color:btn.color}} className="img-action-btn" key={btn.id}>{btn.icon}</button>
        ))}
        </div>
    </div>
  )
}

export default ImgActionRow