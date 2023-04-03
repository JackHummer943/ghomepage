import logo from '../assets/pizza-logo.png';
import aboutPhoto from '../assets/About.jpg';

function About() {
  return(
  <div className="block_portrait">
      <div className="child1">
      <img src={aboutPhoto} className="portrait_img"/>
      </div>
      <div className="description">
      <footer ><p>© 2011–2023 
      G.Dacksa</p>
</footer>
        <p className="description">G.Dacksa is an acclaimed graphic artist and pedagogue. 
        Known at home primarily by illustration work, with over 70 books spanning four decades, 
        he is better recognised abroad for portraiture, 
        nudes and landscapes featured in museums and private galleries.
Merited Artist of Russia and Honorary member of Russian Academy of Fine Arts, 
Klim graduated from St. Petersburg Ilya Repin Institute in 1976 and never left, 
having since served his alma mater in every capacity from faculty assistant to the dean of Graphic arts,
 and, currently, a supervising professor of the book arts programme.</p>
</div>
  </div>
  );
}
export default About;