import logo from '../assets/pizza-logo.png';
function Home(){
return(
  <div className="home">
     <footer className="svelte-12ieuf3"><p>© 2011–2023 
     G.Dacksa</p>
</footer>
      
      
      <nav>
<div class="container">
<div class="parent">
<div class="child">
<img className="img_home" 
      src={logo}  alt=""
      />
</div>
<div class="child">

  <ul className="home_block">

<li >
  
  <a  href="/work" >Work</a> 
</li>
<li >
<a href="/about" >About</a>
 </li>
<li >
<a href="/contact" >Contact</a>
 </li>
 </ul>
</div>
</div>
</div>
 
 </nav>

    </div>
)
};
export default Home;