import '../../src/illustrations.css';
function Illustrations() {
  return (
    <div className="illustrations">
      <ul className="home_block">
        <li>
          <a className="illustration_link" href="/work">
            work
          </a>
        </li>
        <li>
          {/* <a className="illustration_link" href="/about">
            about
          </a> */}
        </li>
        <li>
          <a className="illustration_link" href="/contact">
            contact
          </a>
        </li>
      </ul>

      <nav>
        {' '}
        <ul>
          <li className="illustration_link">
            <a href="/illustrations" className="white">
              Illustrations
            </a>
          </li>

          <li className="illustration_link">
            <a href="/comix" className="illustration_link">
              Comics
            </a>
          </li>
          <li className="illustration_link">
            <a href="/" className="illustration_link">
              Printings
            </a>
          </li>
          <li className="illustration_link">
            <a className="illustration_link">Motion</a>
          </li>
        </ul>
      </nav>

      <footer className="footer">
        <p className="illustration_link_footer"> (c) 2023 G.Dacksa</p>
      </footer>
    </div>
  );
}

export default Illustrations;
