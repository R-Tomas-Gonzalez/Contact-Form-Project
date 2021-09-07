import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import validate from '../validateInfo';

const useStyles = makeStyles(() => ({
    form: {
        marginBottom: "25px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
    }
}));


export default function EditForm(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [userInfo, setUserInfo] = useState(props.userInfo);
    const {firstName, lastName, phoneNumber, email} = userInfo;
    const [errors, setErrors] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendEditedContact = (data) => {
        props.handleEdits(data);
    }

    const handleSubmit = (event) => {
        setErrors(validate(userInfo));

        event.preventDefault();
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]:value,
         });
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
        sendEditedContact(userInfo);
        handleClose();
        }
    }, [errors]);

    return (
        <div className="dialog">
            <Button color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Information</DialogTitle>
                <DialogContent>
                    <form className={classes.form} onSubmit={handleSubmit}>
                    <div>
                        <TextField type="text" name="firstName" onChange={handleChange} defaultValue={firstName} variant="outlined" id="firstName" label="First Name" fullWidth autoFocus/>
                        {errors.firstName && <p style={{color: "red"}}>{errors.firstName}</p>}
                    </div>
                    <br></br>
                    <div>
                        <TextField type="text" name="lastName" onChange={handleChange} defaultValue={lastName} variant="outlined" id="lastName" label="Last Name" fullWidth />
                        {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}
                    </div>
                    <br></br>
                    <div>
                        <TextField type="text" name="phoneNumber" onChange={handleChange} defaultValue={phoneNumber} variant="outlined" id="phoneNumber" label="Phone Number" fullWidth />
                        {errors.phoneNumber && <p style={{color: "red"}}>{errors.phoneNumber}</p>}
                    </div>
                    <br></br>
                    <div>
                        <TextField type="email" name="email" onChange={handleChange} defaultValue={email} variant="outlined" id="email" label="Email" fullWidth />
                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                    </div>
                    <br></br>
                    <Button variant="contained" type="submit" color="primary">
                        Edit Contact
                    </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
