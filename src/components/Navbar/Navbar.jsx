import React from 'react'
import {useAppContext} from "../../context/AppContext"
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = ({link,linkName}) => {
  const {active} = useAppContext();
  return (
    <nav className="nav">
      <div className="nav-title-div">
        <Link className="nav-link" to="/">
        <h2 className="pixel-font nav-header shadow-nav-header">SketchPad</h2>
        <h2 className="pixel-font nav-header nav-header-text">SketchPad</h2>
        <span style={{backgroundColor:active ? 'green' : 'red',boxShadow:`2px 2px 4px ${active ? 'green' : 'red'}`}} className="activity-status"></span>
        </Link>
      </div>
        <button className="nav-link-btn">
            <Link className="nav-link" to={link}>{linkName}</Link>
        </button>
    </nav>
  )
}

export default Navbar