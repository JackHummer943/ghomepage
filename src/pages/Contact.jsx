import aboutPhoto from '../assets/About.jpg';
function Contact() {
  return( <div className="block_portrait">
  <div className="child1">
  <img src={aboutPhoto} className="portrait_img"/>
  </div>
  <div className="description">
  <footer ><p>© 2011–2023 
  G.Dacksa</p>
</footer>
  <div className="contact">
    <p>
      <a href="mailto:letters@...art">letters@...art</a>
    </p> 
    <section>
      <h3 >Follow</h3> 
      <ul>
        <li>
        <a href="/">Facebook</a>
        </li>
        <li>
          <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Vk</a>
            </li>
            <li>
              <a href="/">Ok</a>
              </li>
              </ul>
              </section>
              </div>
</div>
</div>);
}

export default Contact;