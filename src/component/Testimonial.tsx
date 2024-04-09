import React from 'react'
import gandalf from '../../public/images/gandalf.png'
import { AiFillStar } from "react-icons/ai";

interface TestimonialProps {
    avatar: string;
    name: string;
    at: string;
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
            <AiFillStar className='h-5 w-5 text-yellow-400' />
            <AiFillStar className='h-5 w-5 text-yellow-400' />
            <AiFillStar className='h-5 w-5 text-yellow-400' />
            <AiFillStar className='h-5 w-5 text-yellow-400' />
            <AiFillStar className='h-5 w-5 text-yellow-400' />
            </div>
            <p className='mt-6 text-lg font-medium'>
              insert testimonial here
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;