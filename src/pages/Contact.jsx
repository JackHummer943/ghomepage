import GDacksa from '../assets/GDacksa.png';
import EmblemBlack from '../assets/EmblemBlack.png';
import '../../src/contact.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact">
      <div className="left_block">
        <Link to="/">
          <div className="emblem">
            <img href="/" className="emblem_black" src={EmblemBlack} />
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
      <article>
        <section>
          <img className="img_contact" src={GDacksa} alt="" decoding="async" />{' '}
        </section>
      </article>
      <section className="follow">
        <h3 className="h">Follow</h3>
        <ul>
          <li>
            <a className="links">Facebook</a>
          </li>
          <li>
            <a className="links">Instagram</a>
          </li>
          <li>
            <a className="links">Vk</a>
          </li>
          <li>
            <a className="links">Ok</a>
          </li>
        </ul>
      </section>
      <footer className="scroll">
        <p> (c) 2023 G.Dacksa</p>
      </footer>
    </div>
  );
}

export default Contact;
