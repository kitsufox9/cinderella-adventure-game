import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import StartHere from './components/routes/StartHere'

const App = () => (
  <React.Fragment>
    <Route exact path="/" component={StartHere} />
  </React.Fragment>
)
  

export default App;
