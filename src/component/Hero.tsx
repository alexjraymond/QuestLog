import React from 'react'
import Image from 'next/image';

import PrimaryLinkButton from './PrimaryLinkButton';


const Hero: React.FC = () => {
    return (
      <div className='container items-center flex flex-col justify-center mt-24'>
        <section className="grid grid-cols-2 gap-12">
          <div>
            <h1 className="text-6xl mb-4">Life is Boring.</h1>
            <p className="text-lg mb-8">Turn it into some quests, like a wizard would give you or something</p>
            <PrimaryLinkButton href={'/generate'}>Start your quests!</PrimaryLinkButton>
          </div>
          <Image       
            src="/../public/images/questlog_hero_image.png"
            width={500}
            height={500}
            alt="Picture of the author" 
            className=''
      />
        </section>
        </div>
    );
  };

export default Hero