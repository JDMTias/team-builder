// step 1a
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // step 1b, setting up states, giving states default values(empty string and arrays, this depends on info receieved in the future)
  const [memberList, setMemberList] = useState([]);

  return (
    <div className="App"> 
      <h1>Iron Lords of Lambda</h1>
      
      {/* step 1c creating the map through memberlist to render the list of team members, it will show blank until we give it the information needed */}
      {memberList.map((members) => {
        return (
          <div>
            {/* gotta change these to the correct path members.nameofinputfromForm.JS */}
            <h2>{members.nickName}</h2>
            <h3>{members.name}</h3>
            <p>{members.favColor}</p>
          </div>
        );
      })};
    </div>
  );
}

export default App;
