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
    </div>
)
};
// window.scrollTo({top: 0});

export default Home;