import React from 'react'
import { useAppContext } from '../../context/AppContext';
import "./ConfirmToaster.css";

const ConfirmToaster = () => {
  const {showConfirm,handleToasterReply,action} = useAppContext();

  return (
    <div className={`confirm-toaster-parent ${showConfirm ? 'show-toaster' : 'hide-toaster'}`}>
      {action == "clear" && <h5>Resizing the grid will cause it to reset</h5>}
      <h5>Are you sure?</h5>
      <div className="confirm-toaster-btn-row">
        <button onClick={()=>handleToasterReply("confirm",action != "clear")} className="confirm-btn">Yes</button>
        <button onClick={()=>handleToasterReply("cancel",false)} className="confirm-btn">Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmToaster