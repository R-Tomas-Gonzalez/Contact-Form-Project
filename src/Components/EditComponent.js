import React, { useState} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

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

    const {firstName, lastName, phoneNumber, email} = userInfo;

    const sendEditedContact = (data) => {
        props.handleEdits(data);
        props.history.push("/")
    }

    const handleSubmit = (event) => {


        sendEditedContact(userInfo);
        props.handleClose()
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]:event.target.value,
         });
    }
    
    return (
        <Container>
            <div>
                <h3> Edit Information</h3>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div>
                        <TextField type="text" name="firstName" onChange={handleChange} defaultValue={firstName} variant="outlined" id="firstName" label="First Name" fullWidth={true} />
                    </div>
                        <br />
                    <div>
                        <TextField type="text" name="lastName" onChange={handleChange} defaultValue={lastName} variant="outlined" id="lastName" label="Last Name" fullWidth={true} />
                    </div>
                        <br />
                    <div>
                        <TextField type="text" name="phoneNumber" onChange={handleChange} defaultValue={phoneNumber} variant="outlined" id="phoneNumber" label="Phone Number" fullWidth={true} />
                    </div>
                        <br />
                    <div>
                        <TextField type="email" name="email" onChange={handleChange} defaultValue={email} variant="outlined" id="email" label="Email" fullWidth={true} />
                    </div>
                        <br />
                    <Button variant="contained" color="primary" type="submit" >Edit Contact</Button>
                </form>        
            </div>
        </Container>
    )
}

export default EditComponent

