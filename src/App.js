import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./Pages/Header"
import Home from "./Pages/Home";
import CreateNew from "./Pages/CreateNew"
import EditContact from "./Pages/EditContact"

function App() {
  return (
    <div className="App-background">
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/edit" render={props => <EditContact {...props} />} />
        <Route exact path="/new" render={props => <CreateNew {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
