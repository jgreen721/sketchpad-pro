import React from 'react'
import {BgGrid,LoginOverlay,LoginContent} from "./components"
import {BgOverlay} from "../../components"
import { spaceBg3 } from '../../const';
import "./Landing.css";


const Login = () => {

  return (
  
      <div className="full-screen-container login-container">
          <div style={{opacity:'35%'}}>
            <BgOverlay src={spaceBg3}/>
          </div> 
          <div className="view-container">
            <BgGrid/>
            <LoginOverlay/>
            <LoginContent/>
          </div>
      </div>
  
    
  )
}

export default Login