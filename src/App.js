import React, { useState } from 'react';
import Form from './Form'
import './App.css';

function App() {
    const [card, setCard] = useState({name: '', email: '', role: '0'})

  const addNewTeam = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.value
    };
    setCard([...card, newMember])
  }
  return (
    <Form addNewTeam={addNewTeam}/>
  );
}

export default App;
