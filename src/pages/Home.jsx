import React from 'react';
import '../css/Home.css';
// import image from '../img/mypic.png';
// import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <header className="wishes">
        <div className="waviy">
          <span>KARTHICK</span>
        </div>
        <div class="line">
          <h2 class="flipX">
            Web Developer · Frontend Developer · Javascript Developer · React
            Developer
          </h2>
        </div>
      </header>
      <section className="section-i">
       
        <p> <img
          src="https://cdn4.iconfinder.com/data/icons/office-business-1-1/180/Working_Man-512.png"
          alt=""
          className="my-img"
        />
       <b> I'm almost inplement React concept in this page.</b><br/><br/>
          Strong in design and integration with intuitive problem-solving
          skills. Proficient in HTML,CSS JAVASCRIPT, and REACT. Passionate about
          implementing and launching new projects. Ability to translate business
          requirements into technical solutions. Looking to start the career as
          an entry-level frontend developer with a reputed firm driven by
          technology.
        </p>
      </section>
      <article>
        <h1></h1>
      </article>

      <footer>
        <a
          href="https://www.instagram.com/im_g_k__/?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <i className="fa fa-instagram"> instagram</i>
        </a>
        <a
          href="https://www.linkedin.com/in/karthick-g-295425238/"
          target="_blank"
        >
          {' '}
          <i className="fa fa-linkedin"> linkedin </i>
        </a>
        <a href="https://www.naukri.com/mnjuser/homepage" target="_blank">
          {' '}
          <i className="fa fa-paperclip">naukri </i>
        </a>
      </footer>
    </div>
  );
}
