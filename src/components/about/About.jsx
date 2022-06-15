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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam nobis dolor nesciunt quia repellendus similique temporibus deserunt, odit ut necessitatibus, dolorum atque! Ratione error culpa temporibus ex iusto laudantium.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About