import aboutPhoto from '../assets/About.jpg';
function Contact() {
  return( <div className="block_portrait">
  <div className="child1">
  <img src={aboutPhoto} className="portrait_img"/>
  </div>
  <div className="description">
  <div class="copy svelte-dkfo2e">
    <p>
      <a href="mailto:letters@...art">letters@...art</a></p> 
    <section class="social svelte-10ouce2">
      <h3 class="follow svelte-10ouce2">Follow</h3> 
      <ul class="svelte-10ouce2"><li class="svelte-10ouce2">
        <a href="/">Facebook</a>
        </li><li class="svelte-10ouce2">
          <a href="/">Instagram</a>
          </li><li class="svelte-10ouce2">
            <a href="/">Vk</a>
            </li><li class="svelte-10ouce2">
              <a href="/">Ok</a></li></ul></section>
              </div>
</div>
</div>);
}

export default Contact;