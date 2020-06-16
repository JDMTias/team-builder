import React, { useState } from 'react';

export default function MemberFrom(props) {
    // these are the props that app will need, we created a function called onclick in app.js to make it easier and write less code. as well as onChangeHandler

    const { 
        setMemberList, memberList} = props;


    // OnClick is graving values from onChangeHandler and putting them into memberList using spread, which spread copies the memberList so it does not overwrite what is already in there. 
    const onClick = (event) => setMemberList(...memberList,values)

    // all the information is first stored in value once it is submitted with the submit button then it goes to memberlist 

    const [values, setValues] = useState('')

    // onChangeHandler is setting all the values to the name of each input field and grabbing the corresponding data that the app needs it is ran on OnChange in the input fields
    const   onChangeHandler = (event) => {

        setValues({...values, [event.target.name]:event.target.value})
         
     }
         return (
        <div>
            {/* these are inputs (input fields), when writing in css, use double quotes, because it thinks single quotes is something else unlike JS */}
            <label>Nickname:</label>
            <input type="text" placeholder="Your Nickname" maxLength="25" name="nickname" onChange={onChangeHandler}/>

            <label>Name:</label>
            <input type="text" placeholder="Your Name" maxLength="25" name="LegalName" onChange={onChangeHandler}/>

            {/* making a drop down menu as an input field */}

            <label>Favorite Color:</label>
            <select name="favColor" onChange={onChangeHandler}>
                <option value="placeholder">Select Color</option>
                <option value="Aqua">Aqua</option>
                <option value="Green">Green</option>
                <option value="Orange">Orange</option>
            </select>

            {/*missing input type=submit  */}
        </div>
    )



}

