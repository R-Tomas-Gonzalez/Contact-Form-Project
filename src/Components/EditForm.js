import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendEditedContact = (data) => {
        props.handleEdits(data);
        props.history.push("/")
    }

    const handleSubmit = (event) => {
        sendEditedContact(userInfo);
        props.handleClose()
        event.preventDefault();
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]:value,
         });
    }

    return (
        <div className="dialog">
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Information</DialogTitle>
                <DialogContent>
                    <form className={classes.form} onSubmit={handleSubmit}>
                    <div>
                        <TextField type="text" name="firstName" onChange={handleChange} defaultValue={firstName} variant="outlined" id="firstName" label="First Name" fullWidth autoFocus/>
                    </div>
                    <br></br>
                    <div>
                        <TextField type="text" name="lastName" onChange={handleChange} defaultValue={lastName} variant="outlined" id="lastName" label="Last Name" fullWidth />
                    </div>
                    <br></br>
                    <div>
                        <TextField type="text" name="phoneNumber" onChange={handleChange} defaultValue={phoneNumber} variant="outlined" id="phoneNumber" label="Phone Number" fullWidth />
                    </div>
                    <br></br>
                    <div>
                        <TextField type="email" name="email" onChange={handleChange} defaultValue={email} variant="outlined" id="email" label="Email" fullWidth />
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
