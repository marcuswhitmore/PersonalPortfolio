import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import landing from './componets/landing/';
import projects from './componets/projects'

function App() {
  return (
    <Router>
      <div>
       
        <Route path="/" component={landing} />
        <Route path="/projects" component={projects} />

      </div>
    </Router>
   
  );
}

export default App;
