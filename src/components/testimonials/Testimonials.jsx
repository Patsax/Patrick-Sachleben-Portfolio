import React from 'react';
import './testimonials.css';
import person from '../../assets/person.jpg'
import person2 from '../../assets/person-2.jpg'
import person3 from '../../assets/person-3.jpg'
import person4 from '../../assets/person-4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: person,
    name: 'Jaina Proudmoore',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magni. Exercitationem quidem a cumque reprehenderit qui assumenda veritatis excepturi cum modi natus ipsum est obcaecati alias neque maiores, blanditiis voluptatem!'
  },
  {
    avatar: person2,
    name: 'Tyrande Whisperwind',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magni. Exercitationem quidem a cumque reprehenderit qui assumenda veritatis excepturi cum modi natus ipsum est obcaecati alias neque maiores, blanditiis voluptatem!'
  },
  {
    avatar: person3,
    name: 'Anduin Wrynn',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magni. Exercitationem quidem a cumque reprehenderit qui assumenda veritatis excepturi cum modi natus ipsum est obcaecati alias neque maiores, blanditiis voluptatem!'
  },
  {
    avatar: person4,
    name: 'Arthus Menethil',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magni. Exercitationem quidem a cumque reprehenderit qui assumenda veritatis excepturi cum modi natus ipsum est obcaecati alias neque maiores, blanditiis voluptatem!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials