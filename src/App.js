import React from 'react';
import { DaylyMeteo } from './features/dayly_meteo/DaylyMeteo';
import { Meteo } from './features/weekly_meteo/Meteo';
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
                  <div className="meteo_app">
                    <DaylyMeteo/>
                    <Meteo />
                  </div>
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
