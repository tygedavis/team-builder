import React, { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(formData);
        setFormData({ name: '', email: '', role: ''})
    }


    return (
        <form onSubmit={submitForm}>
            <h1>Team Builder</h1>
            <label htmlFor='name'>Name</label>
            <input 
            id='name'
            type='text'
            name='name'
            onChange={handleChange}
            value={formData.name}
            />
            <label htmlFor='email'>Email</label>
            <input
            id='email'
            type='text'
            name='email'
            onChange={handleChange}
            value={formData.email}
            />
            <label htmlFor='role'>Role on Your Team</label>
            <select 
                id='role' 
                name='role' 
                onChange={handleChange} 
                value={formData.role.value}>
                    <option />
                    <option value='Front-End Engineer'>Front-End Engineer</option>
                    <option value='Back-End Engineer'>Back-End Engineer</option>
                    <option value='Designer'>Designer</option>
            </select>
            <button type='submit'>Add Team Memeber</button>
        </form>
    );
}

export default Form;