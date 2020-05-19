import React from "react";

export default function MemberForm(props) {
    // these are the props we will need so calling them form app, this could also be made into a function so you don't have to write so much. like we did on onClick
  const {
    setName,
    setClassType,
    setLightLvl,
    teamList,
    setTeamList,
    onClick,
  } = props;

  return (
    <div>
      <label> GamerTag: </label>
      {/* making input fields */}
      <input
        type="text"
        placeholder="Type your GamerTag"
        maxLength="20"
        name="membername"
        onChange={(event) => setName(event.target.value)}
      />

      <label>Class:</label>
      {/* Drop Down Menu creation */}
      <select
        name="classtype"
        onChange={(event) => setClassType(event.target.value)}
      >
        <option value='placeholder'>Select Class</option>
        <option value="Titan">Titan</option>
        <option value="Warlock">Warlock</option>
        <option value="Hunter">Hunter</option>
      </select>

      <label> Light: </label>
      {/* making input fields */}
      <input
        type="text"
        placeholder="Light Level"
        maxLength="6"
        name="lightlevel"
        onChange={(event) => setLightLvl(event.target.value)}
      />

      <input type="submit" value="Load Out!" onClick={onClick} />
    </div>
  );
}
