<<<<<<< HEAD
import '../../src/home.css';

function Home() {
  return (
    <div className="home">
      <ul className="home_block">
        <li>
          <a href="/Work">work</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>

      <nav>
        {' '}
        <ul>
          <li className="svelte-dmnv9n">
            <a href="/illustrations" className="svelte-dmnv9n">
              Illustrations
            </a>
          </li>

          <li className="svelte-dmnv9n">
            <a href="/comix" className="svelte-dmnv9n">
              Comics
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/" className="white">
              Printings
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/Motions" className="svelte-dmnv9n">
              Motion
            </a>
          </li>
        </ul>
      </nav>

      <footer className="footer">
        <p> (c) 2023 G.Dacksa</p>
      </footer>
=======
import logo from '../assets/mainTitle.jpg';
function Home(){
return(
  <div className="home">
   
      
      
      <header>




<ul className="home_block">

<li style={{color:'silver'}}>

work 
</li>
<li >
<a href="/about" >about</a>
</li>
<li >
<a href="/contact" >contact</a>
</li>
</ul>
  





 
 </header>

  
<nav>  <ul >
  <li >
  
  <a  href="/illustrations"  >
    
  Illustrations
   </a> 
  </li>

<li>
<a href="/Comics"  >Comics</a>
 </li>
<li >
<a href="/Printings" >Printings</a>
 </li>
 <li >
<a href="/Motion"  >Motion</a>
 </li>

 </ul></nav>
 

 <footer><p> (c) 2023 
     G.Dacksa</p>
</footer>
>>>>>>> 41cd873072afa9e22235e0d7cd54f366c8f88a2e
    </div>
  );
}
window.scrollTo({ top: 30 });

export default Home;
