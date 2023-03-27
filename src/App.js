import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Work from './pages/Work';
import Home from './pages/Home';
import About from './pages/About';



function App() {

  // const [homeOpened, setHomeOpened] = React.useState(false);
  
  return (

<div className="wrapper">
  
<Router>


  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Work" element={<Work/>}/>
    <Route path="About" element={<About/>}/>
  </Routes>

</Router>






</div>
  );
}

export default App;
