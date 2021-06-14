import React, { useState, useRef } from 'react';
import Container from '@material-ui/core/Container';

const EditComponent = (props) => {
    
    const [userInfo, setUserInfo] = useState(props.userInfo);

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const emailRef = useRef(null);

    const {id, firstName, lastName, phoneNumber, email } = userInfo;

    const sendEditedContact = (data) => {
        props.handleEdits(data);
        props.history.push("/")
    }

    const handleSubmit = (event) => {

        const editedContactInfo = ({
          "id": id,
          "firstName": firstNameRef.current.value,
          "lastName": lastNameRef.current.value,
          "phoneNumber": phoneNumberRef.current.value,
          "email": emailRef.current.value,
          
        })

        sendEditedContact(editedContactInfo);
        props.handleClose()
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        setUserInfo({
            "id": id,
            [event.target.name]:event.target.value
         });
    }
    
    return (
        <Container>
            
            <div>
                <h3> Edit Information</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <br />
                        <input type="text" name="firstName" value={firstName} placeholder={firstName} onChange={handleChange} ref={firstNameRef}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <br />
                        <input type="text" name="lastName" value={lastName} placeholder={lastName} onChange={handleChange} ref={lastNameRef}/>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <br />
                        <input type="tel" name="phoneNumber" value={phoneNumber} placeholder={phoneNumber} onChange={handleChange} ref={phoneNumberRef}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" name="email" value={email} placeholder={email} onChange={handleChange} ref={emailRef} />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>    
            </div>
        </Container>
    )
}

export default EditComponent