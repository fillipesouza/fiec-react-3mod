import React from 'react';
import './App.css';
import Formulario from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import CriaRifa from './CriaRifa';
import { render } from '@testing-library/react';
import {FirebaseService} from './utils/firebaseUtils';

class App extends React.Component {
  state = {
    data: []
};

componentDidMount() {
    FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
}
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Formulario />
          </Route>
          <Route path="/criarifa">
            <CriaRifa />
          </Route>
          <Route path="/rifa">
            <div>
              Rifa
        </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
