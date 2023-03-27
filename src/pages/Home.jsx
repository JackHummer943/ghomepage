import logo from '../assets/pizza-logo.png';
function Home(){
return(
  <div className="work">
      <img src={logo} style={{marginLeft: 40 + '%'}} alt=""
      />
      <nav>
  
  <ul className="svelte-dmnv9n">
    
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
 <footer className="svelte-12ieuf3"><p>©&nbsp;2011–2023 
</p><p>G&nbsp;Dacksa</p>
</footer>
    </div>
)
};
export default Home;