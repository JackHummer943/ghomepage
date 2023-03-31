import logo from '../assets/pizza-logo.png';
function Home(){
return(
  <div className="work">
      <div className="img_home" 
      // src={logo} style={{marginLeft: 40 + '%'}} alt=""
      ></div>
      
      <nav>
  
  <ul className="home_block">
    
<li className="svelte-dmnv9n">
  
  <a  href="/work" className="svelte-dmnv9n">Work</a> 
</li>
<li className="svelte-dmnv9n">
<a href="/about" className="svelte-dmnv9n">About</a>
 </li>
<li className="svelte-dmnv9n">
<a href="/contact" className="svelte-dmnv9n">Contact</a>
 </li>
 </ul>
 
 </nav>
 <footer className="svelte-12ieuf3"><p>© 2011–2023 
G Dacksa</p>
</footer>
    </div>
)
};
export default Home;