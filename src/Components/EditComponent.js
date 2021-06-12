import React, { useState, useEffect } from 'react';

const EditComponent = (props) => {

    const [userInfo, setUserInfo] = useState(props.userInfo);

    const { firstName, lastName, phoneNumber, email } = userInfo;

    const handleSubmit = (event) => {
        
        const data = userInfo;
        props.handleInputChange(data);
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        
        setUserInfo({[event.target.name]:event.target.value});
        const targetName = event.target.name

    }
    
    return (
        <form onSubmit={handleSubmit}>
            First Name: <input type="text" name="firstName" placeholder={firstName} onChange={handleChange}/>
            Last Name: <input type="text" name="lastName" placeholder={lastName} onChange={handleChange}/>
            Phone Number: <input type="tel" name="PhoneNumber" placeholder={phoneNumber} onChange={handleChange}/>
            Email: <input type="email" name="email" placeholder={email} onChange={handleChange}/>
            <button type="submit">Hit me baby!</button>
        </form>
    )
}

export default EditComponent