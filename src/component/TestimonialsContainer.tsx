import React from 'react'
import Testimonial from './Testimonial'

const TestimonialsContainer = () => {
  return (
    <div className='mx-auto mb-24 max-w-7xl px-8 xl:max-w-screen-lg mt-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
        </div>
    </div>
  )
}

export default TestimonialsContainer