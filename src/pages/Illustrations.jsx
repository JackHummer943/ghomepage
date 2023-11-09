<<<<<<< HEAD
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
          <a className="illustration_link" href="/about">
            about
          </a>
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
=======
import emblem from '../assets/Emblem.png';
import kihot from '../assets/kihot.png';
import pansa from '../assets/pansa.png';
import pictureOne from '../assets/pictureOne.png';
import pictureTwo from '../assets/pictureTwo.png';
import pictureThree from '../assets/pictureThree.png';
import pictureFour from '../assets/pictureFour.png';
import pictureFive from '../assets/pictureFive.png';
import pictureSix from '../assets/pictureSix.png';
import pictureSeven from '../assets/pictureSeven.png';
import pictureEigth from '../assets/pictureEigth.png';
import pictureTen from '../assets/pictureTen.png';
import pictureEleven from '../assets/pictureEleven.png';
import pictureTwelve from '../assets/pictureTwelve.png';
import pictureThirdTe from '../assets/pictureThirdTe.png';
import '../../src/work.css';
import { Link } from 'react-router-dom';
import React from 'react';
import ImageElem from '../components/ImageElem';

<<<<<<<< HEAD:src/pages/Illustrations.jsx
function Illustrations() {
  return(  

    <div className="illustrations">

   
 
<img   src={kihot} alt=""/>
<img   src={pansa} alt=""/>
      
========
function Work() {
  const [images, setImages] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://634fc8a3df22c2af7b59dc7a.mockapi.io/items')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((arr) => {
  //       setImages(arr);
  //     });
  // }, []);

  return (
    <div className="work">
      <div className="left_block">
        <Link to="/">
          <div className="emblem">
            <img
              src={emblem}
              alt=""
              decoding="async"
              style={{
                width: '40px',
                marginLeft: '135px',
                marginTop: '200px',
                marginBottom: '10px',
              }}
            />{' '}
          </div>
        </Link>
        <ul className="list">
          <li className="text">
            <a href="/work">work</a>
          </li>
          <li className="text">
            <a href="/about">about</a>
          </li>
          <li className="text">
            <a href="/contact">contact</a>
          </li>
        </ul>
      </div>
      <article className="image_block">
        {images.map((obj) => (
          // создан отдельный компонент для изображений, чтобы вынести все стили
          // вопрос, брать изображения из БД или оставить изображения внутри проекта?
          <ImageElem key={obj.id} {...obj} img={obj.imageUrl} />
        ))}
        <section className="image_block_wrapper">
          <img
            src={kihot}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="image_block_wrapper">
          <img
            src={pansa}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>

        <section className="image_block_wrapper">
          <img
            src={pictureTwo}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="image_block_wrapper">
          <img
            src={pictureThree}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="image_block_wrapper">
          <img
            src={pictureFour}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="image_block_wrapper">
          <img
            src={pictureFive}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>

        <section className="image_block_wrapper">
          <img
            src={pictureSeven}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>

        <section className="image_block_wrapper">
          <img
            src={pictureTen}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="image_block_wrapper">
          <img
            src={pictureEleven}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="image_block_wrapper">
          <img
            src={pictureTwelve}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="image_block_wrapper">
          <img
            src={pictureThirdTe}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginBottom: '100px' }}
          />{' '}
        </section>
      </article>
      <footer className="scroll">
        <p> (c) 2023 G.Dacksa</p>
      </footer>
>>>>>>>> 41cd873072afa9e22235e0d7cd54f366c8f88a2e:src/pages/Work.jsx
>>>>>>> 41cd873072afa9e22235e0d7cd54f366c8f88a2e
    </div>
  );
}

<<<<<<< HEAD
export default Illustrations;
=======
<<<<<<<< HEAD:src/pages/Illustrations.jsx
export default Illustrations;
========
export default Work;
>>>>>>>> 41cd873072afa9e22235e0d7cd54f366c8f88a2e:src/pages/Work.jsx
>>>>>>> 41cd873072afa9e22235e0d7cd54f366c8f88a2e
