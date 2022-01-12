import './App.css';

import { NavBar } from './components/NavBar';
import { TextForm } from './components/TextForm'
import {About} from './components/About'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  //Control dark mode
  const [mode, setMode] = useState('light');

  const toogleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(5, 2, 15)';
      document.body.style.color = 'white';
    }
  }
  return (
    <>
      <Router>
      <NavBar title="Text Utils" about="About" mode={mode} toogleMode={toogleMode} />
        <Switch>
          <Route exact path="/">
          < TextForm textHeading="Enter the text to analyse" mode={mode} />
          </Route>
          <Route exact path="/home">
          < TextForm textHeading="Enter the text to analyse" mode={mode} />
          </Route>
          <Route exact path="/textUtilities">
          < TextForm textHeading="Enter the text to analyse" mode={mode} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      
      <div className="container my-3">
        
      </div>



    </>
  );
}

export default App;
