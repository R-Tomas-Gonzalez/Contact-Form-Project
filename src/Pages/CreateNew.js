import React, {useRef} from "react";
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

const CreateNew = (props) => {

  const classes= useStyles();
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);

  const addNewContact = (newContactInfo) => {
    props.handleNewData(newContactInfo);
    
    props.history.push("/");
  }

  const handleSubmit = (event) => {

    const lastUser = props.userData.length - 1;
    const lastUserId = props.userData[lastUser].id;
    
    const newContactInfo = ({
      "id": (lastUserId + 1),
      "firstName": firstNameRef.current.value,
      "lastName": lastNameRef.current.value,
      "phoneNumber": phoneNumberRef.current.value,
      "email": emailRef.current.value,
      
    })

    addNewContact(newContactInfo);

    event.preventDefault();
  }

  return (
    <Container>
      <div>
        <h1>Add Character</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          <div>
          <Input type="text" required inputRef={firstNameRef} id="firstName" label="firstName" placeholder="First Name" />

          </div>
          <br />
          <div>
          <Input type="text" required inputRef={lastNameRef} id="lastName" label="lastName" placeholder="Last Name" />

          </div>
          <br />
          <div>
          <Input type="text" required inputRef={phoneNumberRef} id="phoneNumber" label="phoneNumber" placeholder="Phone Number" />

          </div>
          <br />
          <div>
          <Input type="email" required inputRef={emailRef} id="email" label="email" placeholder="Email" />

          </div>
          <br></br>
          <input type="submit" value="Create New Contact!" />
        </form>
      </div>
    </Container>
  );
};

export default CreateNew;
