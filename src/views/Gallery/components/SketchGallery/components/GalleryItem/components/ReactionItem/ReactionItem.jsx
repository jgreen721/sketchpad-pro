import React from 'react'
import "./ReactionItem.css"
import  ReactionBtn  from '../ReactionBtn/ReactionBtn'

const ReactionItem = ({btn,handleEvent}) => {
  return (
    <div className="reaction-item" key={btn.id}>
        <ReactionBtn icon={btn.icon} handleEvent={handleEvent}  action={btn.action} color={btn.color}/>
        <div className="reaction-total-div">
            <div style={{backgroundColor:btn.color}} className="reaction-total-bg-blur"></div>
            <h5 className="reaction-total-small-text">{btn.total}</h5>
        </div>
    </div>
  )
}

export default ReactionItem