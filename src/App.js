import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Components/Header"
import Home from "./Pages/Home";
import CreateNew from "./Pages/CreateNew";
import EditContact from "./Pages/EditContact";
import users from "./users";

function App() {
  const [userProfiles, setUserProfiles] = useState(users);
  
  useEffect(() => {
    const data = sessionStorage.getItem("user-data");
    if (data) {
      setUserProfiles(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("user-data", JSON.stringify(users));
  })

  const handleNewData = (data) => {
    const stored = JSON.parse(sessionStorage.getItem("user-data"));
    stored.push(data);
    sessionStorage.setItem("user-data", JSON.stringify(stored));
    setUserProfiles(JSON.parse(sessionStorage.getItem("user-data")))
  }
  
  return (
    <div className="App-background">
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} userData={userProfiles}/>} />
        <Route exact path="/edit" render={props => <EditContact {...props} userData={userProfiles}/>} />
        <Route exact path="/new" render={props => <CreateNew {...props} userData={userProfiles} handleNewData={handleNewData} />} />
      </Switch>
    </div>
  );
}

export default App;
