import { hover } from '@testing-library/user-event/dist/hover';
import logo from '../assets/mainTitle.jpg';
function Home(){
return(
  <div className="home">
   
      
      
      <header>




<ul className="home_block">

<li >

<a  href="/work" >work</a> 
</li>
<li >
<a href="/about" >about</a>
</li>
<li >
<a href="/contact" >contact</a>
</li>
</ul>
  





 
 </header>

  
<nav>  <ul className="svelte-dmnv9n">
  <li className="svelte-dmnv9n">
  
  <a  href="/dry_media" className="svelte-dmnv9n">
    
  Illustrations
   </a> 
  </li>

<li className="svelte-dmnv9n">
<a href="/about" className="svelte-dmnv9n" >Comics</a>
 </li>
<li className="svelte-dmnv9n">
<a href="/contact" className="svelte-dmnv9n">Printings</a>
 </li>
 <li className="svelte-dmnv9n">
<a href="/contact" className="svelte-dmnv9n" >Motion</a>
 </li>

 </ul></nav>
 

 <footer className="svelte-12ieuf3"><p> (c) 2023 
     G.Dacksa</p>
</footer>
    </div>
)
};
// window.scrollTo({top: 0});

export default Home;