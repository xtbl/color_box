import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from "./colorHelpers";

function App() {
  const findPalette = function(id) {
    return seedColors.find(function(palette){
      return palette.id === id;
    });
  };
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>PALETTE LIST</h1>} />
      <Route exact
        path="/palette/:id"
        render={routeProps => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>} />
    </Switch>
  );
}

export default App;
