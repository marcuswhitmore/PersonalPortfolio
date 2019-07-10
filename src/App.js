import React from 'react';
import logo from './logo.svg';
import './App.css';
import landing from './componets/landing/';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
       
        <Route path="/" component={landing} />
     

      </div>
    </Router>
   
  );
}

export default App;
