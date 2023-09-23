import { hover } from '@testing-library/user-event/dist/hover';
import logo from '../assets/mainTitle.jpg';
import '../../src/home.css';
import { useState } from 'react';

function Home() {
  // const arr = useState();
  // const isFront = arr[0];
  // const setIsFront = arr[1];

  const [isFront, setIsFront] = useState(true);

  const [image, setImage] = useState(0);

  const [activeState, setActiveState] = useState(false);
  const handleClick = (event) => {
    // function handleClick() {
    // event.priventDefault();
    setImage();

    // setIsFront(false);

    console.log('click');
  };
  const [activeIndex, setActiveIndex] = useState(0);

  // const images = [''];

  const onClickImage = (index) => {
    setActiveIndex(index);
  };

  const imgSrc = isFront ? 'long link 1' : 'long link 2';
  return (
    <div className="home">
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
              className="svelte-dmnv9n"
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
              className="svelte-dmnv9n"
              // onClick={() => onClickImage(1)}
              // className={activeIndex === 1 ? 'black' : 'svelte-dmnv9n'}
              // className={activeIndex === 1 ? 'black' : 'svelte-dmnv9n'}>
            >
              Comics
            </a>
          </li>
          <li className="svelte-dmnv9n">
            <a href="/" className="white">
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

export default Home;
