import '../../src/Motions.css';
function Motions() {
  return (
    <>
      <div className="Motions">
        <ul className="home_block">
          <li>
            <a className="motion_link" href="/work">
              work
            </a>
          </li>
          <li>
            <a className="motion_link" href="/about">
              about
            </a>
          </li>
          <li>
            <a className="motion_link" href="/contact">
              contact
            </a>
          </li>
        </ul>

        <nav>
          {' '}
          <ul>
            <li className="svelte-dmnv9n">
              <a href="/illustrations" className="motion_link">
                Illustrations
              </a>
            </li>

            <li className="svelte-dmnv9n">
              <a href="/comix" className="motion_link">
                Comics
              </a>
            </li>
            <li className="svelte-dmnv9n">
              <a href="/" className="motion_link">
                Printings
              </a>
            </li>
            <li className="svelte-dmnv9n">
              <a className="black">Motion</a>
            </li>
          </ul>
        </nav>

        <footer className="footer">
          <p className="motion_link_footer"> (c) 2023 G.Dacksa</p>
        </footer>
      </div>
    </>
  );
}

export default Motions;
