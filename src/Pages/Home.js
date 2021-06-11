import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import users from '../users';
import UserCards from '../Components/UserCards'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center"
  },

}));

const Home = (props) => {
  const [userProfiles, setUserProfiles] = useState([]);

 
  
  useEffect(() => {
    const data = sessionStorage.getItem("user-data");
    if (data) {
      setUserProfiles(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("user-data", JSON.stringify(users));
  })

  const classes = useStyles();

  return (
    
    <div className={classes.root}>
        <h1> Contact List </h1>
      <Container>
        <Grid container spacing={2} justify="center">
          {userProfiles.map(item => 
          <Grid item className={classes.itemContainer} xs={12} sm={6} md={3}>
            <Paper className={classes.paper}><UserCards key={item.id} item={item} /></Paper>
          </Grid> 
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
