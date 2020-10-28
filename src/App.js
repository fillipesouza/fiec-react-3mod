import React, { useState, Fragment } from 'react';
import './App.css';
import Formulario from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import CriaRifa from './CriaRifa';
import LeRifa from './LeRifa';

const App = () => {
  const [logged, setLogged] = useState(false);

  const login = () => {
    console.log('logged')
    setLogged(true);
  }

  const logout = () => {
    setLogged(false);
  }

 
    return (
      <div className="App">
        <Switch>
        {logged ? 
        <Fragment> 
          
            <Route path="/criarifa">
            <CriaRifa />
          </Route>
          
          <Route exact path="/">
            <div>
             <LeRifa />
          </div>
          </Route>
          </Fragment>
          : <Route exact path="/">
          <Formulario login={login} logout={logout} />
        </Route>
          }
        </Switch>
      </div>
    );
  
}

export default App;
