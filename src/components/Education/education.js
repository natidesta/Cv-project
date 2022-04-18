import React from 'react';

function Education() {
  return (
    <div className="form">
        <h3>Education Background</h3>
        <hr></hr>
    <label>School name :</label>
    <input type="text" id="schoolname" name="schoolname"></input> <br></br>
    <label>Field of Study :</label>
    <input type="text" id="field" name="field"></input><br></br>
    <label>Date of Graduation :</label>
    <input type="date" id="date" name="date"></input>
    


    </div>
  )
}

export default Education