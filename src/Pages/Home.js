import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UserCards from '../Components/UserCards';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: '175px',
    marginBottom: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const Home = (props) => {
  const [search, setSearch] = useState("");
  const userProfiles = props.userData;
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1> Contact List </h1>
        <TextField onChange={event => {setSearch(event.target.value)}} id="Search" variant="outlined" label="Search by first name..." style={{width: "275px"}} />
      <Container>
        <br></br>
        <Grid container spacing={2} justify="center">
          {userProfiles.filter((val)=> {return search === "" || val.firstName.toLowerCase().includes(search.toLowerCase()) ? val : null })
          .map((item, key) => 
          <Grid key={key} item >
            <UserCards key={key} {...props} item={item} handleEdits={props.handleEdits} handleDelete={props.handleDelete} />
          </Grid> 
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
