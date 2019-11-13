import React, {useState} from 'react';

function Form(props) {

    // const handleChanges = e => {
    //     setCard({...card, [e.target.name]: e.target.value})
    // }

    return (
        <form>
            <h1>Team Builder</h1>
            <label htmlFor='name'>Name</label>
            <input 
            id='name'
            type='text'
            name='name'
            //onChange={}
            //value={}
            />
            <label htmlFor='email'>Email</label>
            <input
            id='email'
            type='text'
            name='email'
            />
            <label htmlFor='role'>Role on Your Team</label>
            <select id='role' name='role'>
                <option value='0'></option>
                <option value='1'>Front-End Engineer</option>
                <option value='2'>Back-End Engineer</option>
                <option value='3'>Designer</option>
            </select>
            <button>Enter Team Memeber</button>
        </form>
    );
}

export default Form;