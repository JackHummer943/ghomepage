// import GDacksa from '../assets/GDacksa.png';
import '../../src/about.css';
import EmblemWhite from '../assets/EmblemWhite.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div class="wrapper">
      <Link to="/">
        <div className="emblem">
          <img href="/" className="emblem_white" src={EmblemWhite} />
        </div>
      </Link>
      <ul className="about_block">
        <li className="about_list">
          <a href="/work">work</a>
        </li>
        <li className="about_list">
          <a href="/about">about</a>
        </li>
        <li className="about_list">
          <a href="/contact">contact</a>
        </li>
      </ul>
      <div class="text_desc">
        <p className="about_description">Родился в 1995г в Екатеринбурге</p>
        <p className="about_description">
          {' '}
          Основной темой в творчестве является книжная <br />
          иллюстрация к западной и отечественной <br />
          литературе.
        </p>
        <p className="about_description">
          {' '}
          Философия творчества - стараться показать не <br />
          объекты, а смыслы, что находятся между ними.
        </p>
        <p className="about_description">
          {' '}
          Главная задача - изобразить материал, как никто <br />
          раньше, найти оригинальную трактовку.
        </p>
        <p className="about_description">
          {' '}
          Сейчас наибольший интерес представляют печатные <br />
          техники: линогравюра, офорт, шелкография, их <br />
          сочетания и возможности.
        </p>
      </div>
      <footer className="scroll">
        <p> (c) 2023 G.Dacksa</p>
      </footer>
    </div>
  );
}
window.scrollTo({ top: 50 });
export default About;
