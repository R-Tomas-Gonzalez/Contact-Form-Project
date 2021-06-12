import React, {useRef, useState} from "react";
import Container from '@material-ui/core/Container';


const CreateNew = (props) => {


  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);

  const addNewContact = (newContactInfo, event) => {
    props.handleNewData(newContactInfo, event);
    
    props.history.push("/");
  }

  const onSubmit = (event) => {

    const lastUser = props.userData.length - 1
    const lastUserId = props.userData[lastUser].id
    
    const newContactInfo = ({
      "id": (lastUserId + 1),
      "firstName": firstNameRef.current.value,
      "lastName": lastNameRef.current.value,
      "phoneNumber": phoneNumberRef.current.value,
      "email": emailRef.current.value,
      
    })

    addNewContact(newContactInfo, event);

    event.preventDefault();
  }

  return (
    <Container>
      <div>
        <h1>Add Character</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <br></br>
            <input type="text" name="firstName" ref={firstNameRef} required/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <br></br>
            <input type="text" name="lastName" ref={lastNameRef} required/>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <br></br>
            <input type="text" name="phoneNumber" ref={phoneNumberRef} required/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input type="email" name="email" ref={emailRef} required/>
          </div>
          <br></br>
          <input type="submit" value="Create New Contact!" />
        </form>
      </div>
    </Container>
  );
};

export default CreateNew;
