import React from 'react'
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import SearchPage from './pages/SearchPage';

function App() {
  return (

    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            {/* //?search (search results page)*/}
            <SearchPage />
          </Route>
          <Route path="/">
            {/* //?home (the one with the search button)*/}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>


  );
}

export default App;
