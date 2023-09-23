import '../../src/comix.css';
function Comix() {
  return (
    <div className="comix">
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

      <nav>
        {' '}
        <ul>
          <li className="svelte-dmnv9n">
            {/* href="/dry_media" */}
            <a
              href="/"
              // onClick={() => onClickImage(0)}
              // className={activeIndex === 0 ? 'svelte-dmnv9n' : 'black'}>
            >
              Illustrations
            </a>
          </li>

          <li className="svelte-dmnv9n">
            {/* <a href="/about" className="svelte-dmnv9n"> */}
            {/* <a href="/about" onClick={() => setImage()} className="svelte-dmnv9n"> */}
            <a
              href="/comix"
              className="select"
              // onClick={() => onClickImage(1)}
              // className={activeIndex === 1 ? 'black' : 'svelte-dmnv9n'}
              // className={activeIndex === 1 ? 'black' : 'svelte-dmnv9n'}>
            >
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
export default Comix;
