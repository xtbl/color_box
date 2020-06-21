import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
