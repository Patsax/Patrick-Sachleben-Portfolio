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
    description: 'This is an app that shows a few pictures and a description of rooms in a hotel and allows you to book one of them. This was a group project and I was responsible for setting up most of the front end and helped connect to a small database of the room info.',
    github: 'https://github.com/Patsax/h-booker',
    demo: 'https://h-booker.herokuapp.com/'
  },
  {
    id: 2,
    image: img2,
    title: 'Night Picks',
    description: 'This app takes input from the user and produces suggestions for a movie to watch along with a cocktail to enjoy possibly with a partner. This was a group project and I primarily helped design the front end look.',
    github: 'https://github.com/Patsax/Night-Picks',
    demo: 'https://patsax.github.io/Night-Picks/'
  },
  {
    id: 3,
    image: img3,
    title: 'git-it-done',
    description: 'This app is an alternative way to search Github. It specifically searches projects with open issues for developers to contribute. You can search for specific users or just by wether the project has HTML, CSS, or JavaScript.',
    github: 'https://github.com/Patsax/git-it-done',
    demo: 'https://patsax.github.io/git-it-done/'
  },
  {
    id: 4,
    image: img4,
    title: 'Workday-Planning',
    description: 'This app was developed with the 9 to 5 employee in mind. The user can set tasks and events in certain time blocks. As the day passes, the different blocks change colors to indicate status.',
    github: 'https://github.com/Patsax/workday-planning',
    demo: 'https://patsax.github.io/workday-planning/'
  },
  {
    id: 5,
    image: img5,
    title: 'Taskinator',
    description: 'This is a simple To Do list with drag and drop functionality. The user can just type in a task name and pick a type, then it will appear in the To Do section. The task can then be moved to and from the other sections.',
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
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article id={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
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