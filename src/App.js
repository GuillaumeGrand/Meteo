import React from 'react';
import { Meteo } from './features/meteo/Meteo';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  return (

    <Router>
          <div className="App" >
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <React.Fragment>
                    <Meteo />
                  </React.Fragment>
                )}
              />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
  );
}

export default App;
