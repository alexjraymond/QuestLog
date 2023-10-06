import React from 'react'
import { Button } from './Button';

const Hero: React.FC = () => {
    return (
      <div className="bg-cover bg-center flex justify-center items-center mt-10">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-6xl text-white mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-8">Discover amazing things with us</p>
        </div>
      </div>
    );
  };

export default Hero