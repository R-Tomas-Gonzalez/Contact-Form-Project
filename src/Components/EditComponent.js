import React, { useState, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const EditComponent = (props) => {
    const classes= useStyles();
    
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
                <form className={classes.root} onSubmit={handleSubmit}>
                    <div>
                        <Input type="text" id="firstName" defaultValue={firstName} placeholder={firstName} onChange={handleChange} inputRef={firstNameRef}/>
                        <label htmlFor="firstName">First Name</label>
                        <br />
                    </div>
                    <div>
                        <Input type="text" id="lastName" defaultValue={lastName} placeholder={lastName} onChange={handleChange} inputRef={lastNameRef}/>
                        <label htmlFor="lastName">Last Name</label>
                        <br />
                    </div>
                    <div>
                        <Input type="tel" id="phoneNumber" defaultValue={phoneNumber} placeholder={phoneNumber} onChange={handleChange} inputRef={phoneNumberRef}/>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <br />
                    </div>
                    <div>
                        <Input type="email" id="email" defaultValue={email} placeholder={email} onChange={handleChange} inputRef={emailRef} />
                        <label htmlFor="email">Email</label>
                        <br />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>    
            </div>
        </Container>
    )
}

export default EditComponent