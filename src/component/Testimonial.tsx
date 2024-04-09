import React from 'react'
import gandalf from '../../public/images/gandalf.png'

interface TestimonialProps {
    avatar: string;
    name: string;
    position: string;
    testimonial: string;
  }

  const Testimonial = () => {
    return (
      <div className="rounded-4xl h-full border bg-gray-600 bg-opacity-60 p-6">
        <div className='flex h-full flex-col justify-between'>
          <div className='mb-5 block'>
            <header className='-m-2 mb-4 flex flex-wrap'>
              <div className='w-auto p-2'>
                <img src={gandalf} alt='gandalf' />
              </div>
              <div className='w-auto p-2'>
                <h3 className='font-semibold leading-normal'>Gandalf</h3>
                <p className='uppercase text-gray-300'>@THEGREY</p>
              </div>
            </header> {/*FIX IMAGE */} 
            <div className='flex items-center'>
            </div>
            <p className='mt-6 text-lg font-medium'>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;