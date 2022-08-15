import React from 'react';
import "./assets/scss/app.css"
import {CafeteraMachine, CafeteraStatus, CafeteraButtons} from "./components"


const App: React.FC = () => {
  return (
    <div className="App">
      <div className='container' >
      <CafeteraStatus/>
      <CafeteraMachine/>
      <CafeteraButtons/>
      </div>
    </div>
  );
}

export default App;
