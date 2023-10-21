import '../../src/home.css';

function Home() {
  return (
    <div className="home">
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
            <a href="/illustrations" className="svelte-dmnv9n">
              Illustrations
            </a>
          </li>

          <li className="svelte-dmnv9n">
            <a href="/comix" className="svelte-dmnv9n">
              Comics
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/" className="white">
              Printings
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/Motions" className="svelte-dmnv9n">
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

export default Home;
