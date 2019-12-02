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
            <h1 className='header'>Team Builder</h1>
            <div className='formInput'>
                <label htmlFor='name'>Name</label>
                <input 
                id='name'
                type='text'
                name='name'
                onChange={handleChange}
                value={formData.name}
                placeholder='Full Name'
                />
                <label htmlFor='email'>Email</label>
                <input
                id='email'
                type='text'
                name='email'
                onChange={handleChange}
                value={formData.email}
                placeholder='Email'
                />
                <label htmlFor='role'>Role on Your Team</label>
                <select 
                    id='role' 
                    name='role' 
                    onChange={handleChange} 
                    value={formData.role}
                    placeholder='Your Role on the Team'>
                        <option value='none' className='noShow'/>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                        <option value='IOS Development'>IOS Development</option>
                </select>
                <button className='button' type='submit'>Add Team Member</button>
            </div>
        </form>
    );
}

export default Form;