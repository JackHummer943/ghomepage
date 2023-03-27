import logo from '../assets/pizza-logo.png';

function About() {
  return(
  <>
   <div className="block portrait">
      <img src={logo} className="portrait_img"/>
      </div> 
      <div className="description">
        <p className="description">G Dacksa is an acclaimed graphic artist .</p>
</div>
  </>
  );
}
export default About;