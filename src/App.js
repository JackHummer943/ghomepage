import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Illustrations from './pages/Illustrations';
import Home from './pages/Home';
import About from './pages/About';
import WorkPages from './pages/WorkPages';
import Contact from './pages/Contact';



function App() {

  
  return (

<div className="wrapper">
  
<Router>


  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Illustrations" element={<Illustrations/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/dry_media" element={<WorkPages/>}/>
    
  </Routes>

</Router>






</div>
  );
}

export default App;
