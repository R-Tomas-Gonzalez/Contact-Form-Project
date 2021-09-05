import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReactDom from 'react-dom';
import '../App.css'
import '../index.css';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const EditModal = ({ open, children, onClose }) => {
    
    const classes = useStyles();

    if(!open) return null;

    

    // const styles = {
    //     position: "fixed",
    //     top: "50%",
    //     left: "50%",
    //     transform: translate(-50%, -50%),
    //     background-color: "#f7f6f3",
    //     padding: 25px,
    //     z-index: 1000,
    //     color: #75736e,
    //     border-radius: 7px,
    // }
    
    return ReactDom.createPortal(
        <Fragment>
            <div className="overlay-styles" onClick={onClose}/>
            <div className="modal-styles">
            <IconButton aria-label="delete" color="secondary" className={classes.margin} size="small" onClick={onClose}>
                <CloseIcon fontSize="inherit" />
            </IconButton>
                {/* <Button color="secondary" variant="contained" onClick={onClose}>X</Button>
                  */}
                {children}
            </div>
        </Fragment>,
        document.getElementById('portal')
    );

}

export default EditModal;