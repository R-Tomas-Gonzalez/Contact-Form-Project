import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Components/Header"
import Home from "./Pages/Home";
import CreateNew from "./Pages/CreateNew";
import users from "./users";

function App() {
  const [userProfiles, setUserProfiles] = useState(users);

  useEffect(() => {
    console.log("hello")
    const data = sessionStorage.getItem("user-data");
    if (data) {
      setUserProfiles(JSON.parse(data));
    }
  }, ["user-data"])
  
  const handleNewData = (data) => {
    userProfiles.push(data);
    sessionStorage.setItem("user-data", JSON.stringify(userProfiles));
    setUserProfiles(JSON.parse(sessionStorage.getItem("user-data")));
  }

  const handleDelete = (data) => {
    for (const user of userProfiles ) {
      if (user.firstName === data.firstName){
        const index = userProfiles.indexOf(user);
        userProfiles.splice(index, 1);
        sessionStorage.setItem("user-data", JSON.stringify(userProfiles));
        setUserProfiles(JSON.parse(sessionStorage.getItem("user-data")))
      }
    }
  }
  
  const handleEdits = (data) => {
    for (const user of userProfiles ) {
      if (user.id === data.id){
        const index = userProfiles.indexOf(user);
        userProfiles.splice(index, 1, data);
        sessionStorage.setItem("user-data", JSON.stringify(userProfiles));
        setUserProfiles(JSON.parse(sessionStorage.getItem("user-data")))
      }
    }
  }

  return (
    <div className="App-background">
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} userData={userProfiles} handleDelete={handleDelete} handleEdits={handleEdits}/>} />
        <Route exact path="/new" render={props => <CreateNew {...props} userData={userProfiles} handleNewData={handleNewData} />} />
      </Switch>
    </div>
  );
}

export default App;
