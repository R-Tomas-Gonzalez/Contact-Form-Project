import React from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import useForm from "../useForm";
import validate from "../validateInfo"

const useStyles = makeStyles(() => ({
  form: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  }
}));

const CreateNew = (props) => {

  const classes= useStyles();

  const {handleChange, handleSubmit, values, errors} = useForm(validate, props); 

  return (
    <Container>
      <div className="new-character-form">
        <h1>Add Character</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>
          <TextField type="text" name="firstName" value={values.firstName} onChange={handleChange} variant="outlined" id="firstName" label="First Name" fullWidth={true}/>
          {errors.firstName && <p style={{color: "red"}}>{errors.firstName}</p>}
          </div>
          <br />
          <div>
          <TextField type="text" name="lastName" value={values.lastName} onChange={handleChange} variant="outlined" id="lastName" label="Last Name" fullWidth={true}/>
          {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}
          </div>
          <br />
          <div>
          <TextField type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} variant="outlined" id="phoneNumber" label="Phone Number" fullWidth={true}/>
          {errors.phoneNumber && <p style={{color: "red"}}>{errors.phoneNumber}</p>}
          </div>
          <br />
          <div>
          <TextField type="email" name="email" value={values.email} onChange={handleChange} variant="outlined" id="email" label="Email" fullWidth={true} />
          {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
          </div>
          <br></br>
          <Button variant="contained" color="primary" type="submit" style={{marginBottom: "25px"}}>Add New Contact</Button>
        </form>
      </div>
    </Container>
  );
};

export default CreateNew;
