import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import ApiCall from './components/ApiCall';
import RowDetails from './components/RowDetails';

function App() {
  return (
    <div data-testid="app">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ApiCall}/>
          <Route path="/RowDetails" component={RowDetails}/>
        </Switch>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
