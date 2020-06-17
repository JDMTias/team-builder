import React, { useState } from "react";

export default function MemberForm(props) {
  // these are the props that app will need, we created a function called onclick in app.js to make it easier and write less code. as well as onChangeHandler

  const { memberList, setMemberList } = props;

  // OnClick is grabbing values from onChangeHandler and putting them into memberList using spread(...), which spread then copies the memberList so it does not overwrite what is already in there.
  const handleSubmit = (event) => {
      event.preventDefault()
      setMemberList([...memberList, values])};

  // all the information is first stored in value once it is submitted with the submit button then it goes to memberlist

  const [values, setValues] = useState("");
  

  // onChangeHandler is setting all the values to the name of each input field and grabbing the corresponding data that the app needs, it is ran on OnChange in the input fields
  const onChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* these are inputs (input fields), when writing in css, use double quotes, because it thinks single quotes is something else unlike JS */}
      <label>Nickname:</label>
      <input
        type="text"
        placeholder="Your Nickname"
        maxLength="25"
        name="nickname"
        onChange={onChangeHandler}
      />

      <label>Name:</label>
      <input
        type="text"
        placeholder="Your Name"
        maxLength="25"
        name="LegalName"
        onChange={onChangeHandler}
      />

      {/* making a drop down menu as an input field */}

      <label>Favorite Color:</label>
      <select name="favColor" onChange={onChangeHandler}>
        <option value="placeholder">Select Color</option>
        <option value="Aqua">Aqua</option>
        <option value="Green">Green</option>
        <option value="Orange">Orange</option>
      </select>
        {/* This is where the onClick function is called to submit all the information */}
      <input type="submit" value="submit"/>
    </form>
  );
}
