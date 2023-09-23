// import aboutPhoto from '../assets/About.jpg';
import GDacksa from '../assets/GDacksa.png';
import '../../src/about.css';

function About() {
  return (
    <div class="wrapper">
      <div>
        {' '}
        <ul className="home_block">
          <li>
            {/* <a onClick={() => handleClick}>work</a> */}
            <a href="/work">work</a>

            {/* <a
            onClick={() => handleClick}
            style={{ backgroundImage: `url(../src/assets/kihot.jpg)` }}>
            work
          </a> */}
            {/* <a className={`sidebar ${activeState ? 'active' : ''}`}></a> */}
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </div>

      <div class="central">
        <img src={GDacksa} />
      </div>
      <div class="copy">text textetxtttttttxxxxxxxxxxx</div>

      <footer class="svelte-12ieuf3">
        <p>
          ©&nbsp;1994–2023
          <span class="name svelte-12ieuf3">Klim&nbsp;Lee</span>
        </p>
      </footer>
    </div>
  );
}
export default About;
