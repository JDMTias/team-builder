import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemberForm from "./Form";

function App() {
  // setting default value for state, teamlist tracks list of teammember while member info has key/calue pairs with it.
  const [teamList, setTeamList] = useState([]);
  const [teamMemberInfo, setTeamMemberInfo] = useState("");
  const [name, setName] = useState('')
  const [classType, setClassType] = useState('')
  const [lightLvl, setLightLvl] = useState('')

  const onClick =(event) => setTeamList(teamList.concat({name:name, classType:classType, lightLvl:lightLvl

  }))
  
  return (
    <div className="App">
      <h1>Caydes Misfits</h1>
      <MemberForm
      // props we are passing into Form.js
      setName= {setName}
      setClassType = {setClassType}
      setLightLvl = {setLightLvl}
      setTeamList = {setTeamList}
      teamList = {teamList}
      onClick = {onClick}
      />
      {teamList.map((team) => {
        return (
          <div>
            <h2>{team.name}</h2>
            <h3>{team.classType}</h3>
            <p>{team.lightLvl}</p>
            {/* This is rendering the teammember list */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
