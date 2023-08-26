import React from "react";
import "./Popup.css";
export const Popup = ({ text, closePopup, isDeletePopup, deleteFunction }) => {


  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1>{text}</h1>
        <button className="formButton" onClick={closePopup}>Close</button>
        {isDeletePopup && (<button id="delete-button" className="formButton" onClick={deleteFunction} >Delete</button>)}
      </div>
    </div>
  );
};