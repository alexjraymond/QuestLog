import { type NextPage } from 'next'
import React from 'react'
import Hero from '~/component/Hero'
import Testimonial from '~/component/Testimonial'
import Gandalf from 'public/images/gandalf.png'
import TestimonialsContainer from '~/component/TestimonialsContainer'

const Landing: NextPage = () => {

  const testimonials = [
    {avatar: '../../public/images/gandalf.png', name: 'Gandalf', position: 'The Grey', testimonial: 'it helped me take the hobbits to isengard!'  },
    {avatar: Gandalf, name: 'Gandalf', position: 'The Grey', testimonial: 'it helped me take the hobbits to isengard!'  },
    {avatar: Gandalf, name: 'Gandalf', position: 'The Grey', testimonial: 'it helped me take the hobbits to isengard!'  },
    {avatar: Gandalf, name: 'Gandalf', position: 'The Grey', testimonial: 'it helped me take the hobbits to isengard!'  },

  ]



  return (
    <>
      <Hero />
      <TestimonialsContainer />
    </>
  )
}

export default Landing