import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Work from './pages/Work';
import Home from './pages/Home';
import About from './pages/About';
import WorkPages from './pages/WorkPages';
import Contact from './pages/Contact';
import Comix from './pages/Comix';
import Illustrations from './pages/Illustrations';
import Motions from './pages/Motions';


function App() {

  
  return (
<>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Work" element={<Work/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="Illustrations" element={<Illustrations/>}/>
    <Route path="/Comix" element={<Comix/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/dry_media" element={<WorkPages/>}/>
    <Route path="/Motions" element={<Motions/>}/>
  </Routes>
</Router>
</>
  );
}

export default App;
