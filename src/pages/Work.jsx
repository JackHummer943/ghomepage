import logo from '../assets/pizza-logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkPages from './WorkPages';

function Work() {
  return(  

    <div className="work">
      <img src={logo} style={{marginLeft: 40 + '%'}} alt=""
      />
      <nav>
  
  <ul className="svelte-dmnv9n">
    
<WorkPages
/>
<li className="svelte-dmnv9n">
<a href="/about" className="svelte-dmnv9n">Ink</a>
 </li>
<li className="svelte-dmnv9n">
<a href="/contact" className="svelte-dmnv9n">Colour Pastel</a>
 </li>
 <li className="svelte-dmnv9n">
<a href="/contact" className="svelte-dmnv9n">Watercolour</a>
 </li>

 </ul>
 
 </nav>
    </div>



);
}

export default Work;