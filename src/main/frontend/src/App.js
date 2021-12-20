import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Menu from './Components/Menu';
import SelectedBreed from './Components/SelectedBreed';
import BreedList from './Components/BreedList';
import Facility from './Components/Facility';
import Staff from './Components/Staff';

// add email form for appointments?
function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Welcome}/>
          <Route path={"/breeded-shelter/main"} exact component={Menu}/>
          <Route path={"/breeded-shelter/Staff"} exact component={Staff}/>
          <Route path={"/breeded-shelter/residents"} exact component={BreedList}/>
          <Route path={"/breeded-shelter/facility"} exact component={Facility}/>
          <Route path={"/breeded-shelter/residents/:breed/:id"} exact component={SelectedBreed}/>
          <Redirect to={"/breeded-shelter/main"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;