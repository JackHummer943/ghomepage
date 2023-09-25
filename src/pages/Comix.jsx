import '../../src/comix.css';
function Comix() {
  return (
    <div className="comix">
      <ul className="home_block">
        <li>
          <a href="/work">work</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>

      <nav>
        {' '}
        <ul>
          <li className="svelte-dmnv9n">
            <a href="/">Illustrations</a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/comix" className="select">
              Comics
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/" className="svelte-dmnv9n">
              Printings
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/contact" className="svelte-dmnv9n">
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
