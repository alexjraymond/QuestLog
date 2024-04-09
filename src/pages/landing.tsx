import { type NextPage } from 'next'
import React from 'react'
import Hero from '~/component/Hero'
import Testimonial from '~/component/Testimonial'
import Gandalf from 'public/images/gandalf.png'

const Landing: NextPage = () => {

  const testimonials = [
    {avatar: '../../public/images/gandalf.png', name: 'Gandalf', position: 'The Grey', testimonial: 'it helped me take the hobbits to isengard!'  },
    {avatar: Gandalf, name: 'Gandalf', position: 'The Grey', testimonial: 'it helped me take the hobbits to isengard!'  },
    {avatar: Gandalf, name: 'Gandalf', position: 'The Grey', testimonial: 'it helped me take the hobbits to isengard!'  }

  ]



  return (
    <>
    <Hero />
    <div className="testimonials-container">
      {testimonials.map((t, index) => (
        <Testimonial 
          key={index}
          avatar={t.avatar}
          name={t.name}
          position={t.position}
          testimonial={t.testimonial}
        />
      ))}
    </div>
    </>
  )
}

export default Landing