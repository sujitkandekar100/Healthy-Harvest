import React from 'react'
import './App.css';
import Home from './components/Home'
import Explore from './components/Explore'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/explore" exact element={<Explore/>}/>
      </Routes>
    </Router>
  );
}

export default App;
