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

function Work() {
  // const [apps, setApps] = useState();
  const [isLoading, setIsLoading] = React.useState(true);
  // const [items, setItems] = React.useState([]);

  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    // get запрос через функцию fetch на получение ответа по ссылке
    fetch('https://634fc8a3df22c2af7b59dc7a.mockapi.io/items')
      // когда отпарвился запрос, верни ответ
      // и дай нам из этого ответа только json
      .then((res) => {
        //      console.log('ОТВЕТ', res.json);

        // верни при отклике json файл
        return res.json(); // переконвертируй его в json
      })
      // тогда при получении массива
      .then((arr) => {
        setImages(arr);
        setIsLoading(false); // задел для Skeleton если он вообще будет нужен
      });
  }, []);

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
      <article className="svelte-wti579">
        {images.map((obj) => (
          <ImageElem key={obj.id} {...obj} img={obj.imageUrl} />
        ))}
        <section className="svelte-wti579">
          {/* { isLoading
          ? [ new Array(6)].map((_,index)) => <Skeleton.key = {index} />
          : items.map((obj) => <ImageElem key={obj.id} {...obj}/>)} */}
          {/* items.map((obj) => (
            <ImageElem key={obj.id} {...obj} />
          ))} */}
        </section>

        <section className="svelte-wti579">
          <img
            src={kihot}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="svelte-wti579">
          <img
            src={pansa}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        {/* <section className="svelte-wti579">
          <img
            src={pictureOne}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section> */}
        <section className="svelte-wti579">
          <img
            src={pictureTwo}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="svelte-wti579">
          <img
            src={pictureThree}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="svelte-wti579">
          <img
            src={pictureFour}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="svelte-wti579">
          <img
            src={pictureFive}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        {/* <section className="svelte-wti579">
          <img
            src={pictureSix}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section> */}
        <section className="svelte-wti579">
          <img
            src={pictureSeven}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        {/* <section className="svelte-wti579">
          <img
            src={pictureEigth}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section> */}
        <section className="svelte-wti579">
          <img
            src={pictureTen}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="svelte-wti579">
          <img
            src={pictureEleven}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="svelte-wti579">
          <img
            src={pictureTwelve}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
        <section className="svelte-wti579">
          <img
            src={pictureThirdTe}
            alt=""
            decoding="async"
            className="svelte-efm2wi"
            style={{ width: '700px', marginLeft: '400px', marginBottom: '100px' }}
          />{' '}
        </section>
      </article>
      <footer className="scroll">
        <p> (c) 2023 G.Dacksa</p>
      </footer>
    </div>
  );
}

export default Work;
