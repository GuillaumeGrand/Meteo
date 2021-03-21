import React from 'react';
import { DailyMeteo } from './features/daily_meteo/DailyMeteo';
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
                    <DailyMeteo/>
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
