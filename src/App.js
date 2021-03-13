import React from 'react';
import './App.scss';

import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OldMain from './components/OldMain';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/frontend-developer" component={OldMain} />
        <Route path="/video-editor" component={OldMain} />
      </Switch>
    </Router>

  );
}

export default App;
