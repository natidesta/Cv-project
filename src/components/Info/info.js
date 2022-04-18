import React from "react";
import './style.css';



function Info() {
  return (
    <div className="form">
        <h3>Personal Information</h3>
        <hr></hr>
    <label>FirstName :</label>
    <input type="text" id="fname" name="fname"></input> <br></br>
    <label>LastName :</label>
    <input type="text" id="lname" name="lname"></input> <br></br>
    <label>Email :</label>
    <input type="text" id="email" name="email"></input><br></br>
    <label>phoneNumber :</label>
    <input type="number" id="phoneno" name="phoneno"></input>
    </div>
  )
}

export default Info