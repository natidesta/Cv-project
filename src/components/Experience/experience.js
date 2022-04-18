import React from "react";


function Experience() {
  return (
    <div className="form">
        <h3>Work Experience</h3>
        <hr></hr>
    <label>Company name :</label>
    <input type="text" id="companyname" name="companyname"></input> <br></br>
    <label>Position :</label>
    <input type="text" id="position" name="position"></input><br></br>
    <label>Start Date:</label>
    <input type="date" id="startdate" name="startdate"></input> 
    <label>End Date:</label>
    <input type="date" id="enddate" name="enddate"></input> 
    </div>

  )
}

export default Experience