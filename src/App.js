import React, { useState } from 'react';
import Form from './Form'
import MemberCard from './MemberCard';
import './App.css';


function App() {
  const [team, setTeam] = useState([{
    id: 1,
    name: 'Tyge Davis',
    email: 'td@lambda.com',
    role: 'Front-End Engineer'
  }])

  const addNewTeam = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember])
  }

  return (
    <>
      <Form addNewTeam={addNewTeam}/>
      <h2>Your Team</h2>
      <MemberCard team={team}/>
    </>
  );
}

export default App;
