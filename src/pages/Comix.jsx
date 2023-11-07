import '../../src/comix.css';
function Comix() {
  return (
    <div className="comix">
      <ul className="home_block">
        <li>
          <a href="/work" className="white_comix">
            work
          </a>
        </li>
        <li>
          <a href="/about" className="white_comix">
            about
          </a>
        </li>
        <li>
          <a href="/contact" className="white_comix">
            contact
          </a>
        </li>
      </ul>

      <nav>
        {' '}
        <ul>
          <li className="svelte-dmnv9n">
            <a href="/illustrations" className="white_comix">
              Illustrations{' '}
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/comix" className="select">
              Comics
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/" className="white_comix">
              Printings
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/Motions" className="white_comix">
              Motion
            </a>
          </li>
        </ul>
      </nav>

      <footer className="footer">
        <p> (c) 2023 G.Dacksa</p>
      </footer>
    </div>
  );
}

window.scrollTo({ top: 30 });
export default Comix;
