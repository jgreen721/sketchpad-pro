import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import {Landing, SketchPad,Gallery} from "./views"
import './App.css'

function App() {

  return (
    <div className="app">
       <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/sketchpad" element={<SketchPad/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes> 
    </div>
  )
}

export default App
