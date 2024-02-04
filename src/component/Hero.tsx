import React from 'react'
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
      <div className="container mx-auto flex min-h-screen flex-col items-center max-w-screen-md mt-10">
        <div className="mx-auto bg-opacity-50 p-6 rounded-lg flex-wrap justify-center lg">
          <div>
            <h1 className="text-6xl mb-4">Life is Boring.</h1>
            <p className="text-lg mb-8">Turn it into some quests, like a wizard would give you or something</p>
          </div>
          <Image       
            src="/../public/images/hero-image-1.png"
            width={500}
            height={500}
            alt="Picture of the author" 
            className=''
      />
        </div>
      </div>
    );
  };

export default Hero