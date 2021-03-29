import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from "./components/user/RegisterPage";
import LoginPage from "./components/user/LoginPage";

function App() {

  useEffect(() => {
    document.title = 'Greenbay';
  })

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
