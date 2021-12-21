import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Menu from './Components/Menu';
import SelectedBreed from './Components/SelectedBreed';
import BreedList from './Components/BreedList';
import Facility from './Components/Facility';
import Staff from './Components/Staff';

// add email form for appointments?
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/breeded-shelter/main" element={<Menu />} />
          <Route path="/breeded-shelter/Staff" element={<Staff />} />
          <Route path="/breeded-shelter/residents" element={<BreedList />} />
          <Route path="/breeded-shelter/facility" element={<Facility />} />
          <Route path="/breeded-shelter/residents/:breed/:id" element={<SelectedBreed />} />
        </Routes>
    </Router>
  );
}

export default App;