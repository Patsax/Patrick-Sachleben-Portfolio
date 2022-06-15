import React from 'react';
import './about.css';
import Millenium from '../../assets/millenium.JPG'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={Millenium} alt="Patrick and his brother in front of the Millenium Falcon in Galaxy's Edge." />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>0-1 years experience</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>clients</h5>
              <small>clients world wide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 10+ projects completed</small>
            </article>

          </div>
          
          <p>
            My name is Patrick Sachleben. In my spare time I pursue several forms of entertainment. I like most forms of gaming be they video, board, or even card games. I enjoy reading, favoring the fantasy and sci-fi genres. I also enjoy watching movies such as anything Star Wars, Star Trek (the two are not mutually exclusive), Marvel, etc. I am a Full Stack Web Developer with a background in leadership that recently earned a certificate in full stack development from Butler University. I have newly developed skills in JavaScript, CSS, the MERN stack, and responsive web design. I'm known as passionate about developing apps, with focus on mobile-first design and smooth user experience. I aim to develop apps that meet and exceed client/company requirements. I'm excited to leverage my skills as part of a quality-driven team to build useful apps and experiences on the web.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About