import React from 'react';
import './portfolio.css';
import img1 from '../../assets/h-booker-screen.png'
import img2 from '../../assets/Night-Picks-screenshot.png'
import img3 from '../../assets/git-it-done-screen.png'
import img4 from '../../assets/workday-schedule-screen.png'
import img5 from '../../assets/Taskinator-screen.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'H-Booker',
    github: 'https://github.com/Patsax/h-booker',
    demo: 'https://h-booker.herokuapp.com/'
  },
  {
    id: 2,
    image: img2,
    title: 'Night Picks',
    github: 'https://github.com/Patsax/Night-Picks',
    demo: 'https://patsax.github.io/Night-Picks/'
  },
  {
    id: 3,
    image: img3,
    title: 'git-it-done',
    github: 'https://github.com/Patsax/git-it-done',
    demo: 'https://patsax.github.io/git-it-done/'
  },
  {
    id: 4,
    image: img4,
    title: 'Workday-Planning',
    github: 'https://github.com/Patsax/workday-planning',
    demo: 'https://patsax.github.io/workday-planning/'
  },
  {
    id: 5,
    image: img5,
    title: 'Taskinator',
    github: 'https://github.com/Patsax/taskinator',
    demo: 'https://patsax.github.io/taskinator/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article id={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio