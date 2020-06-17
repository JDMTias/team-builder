// step 1a
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemberForm from './Form'

function App() {
  // step 1b, setting up states, giving states default values(empty string and arrays, this depends on info receieved in the future)
  const [memberList, setMemberList] = useState([]);
  console.log(memberList)
  return (
    <div className="App">
     
      <h1>Iron Lords of Lambda</h1>
      {/* 2d Rendering form so that map can use it.and gather all necessary information that will be inputed in, must add the props that form needs   */}
      <MemberForm memberList={memberList} setMemberList={setMemberList}/>
      {/* step 1c creating the map through memberlist to render the list of team members, it will show blank until we give it the information needed */}
      {memberList.map((members) => {
        return (
          <div>
            {/* this is rendering the memberlist using name of inputs */}
            <h2>{members.nickname}</h2>
            <h3>{members.LegalName}</h3>
            <p>{members.favColor}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
