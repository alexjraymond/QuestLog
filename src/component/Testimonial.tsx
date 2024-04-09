import React from 'react'

interface TestimonialProps {
    avatar: string;
    name: string;
    position: string;
    testimonial: string;
  }

  const Testimonial: React.FC<TestimonialProps> = ({ avatar, name, position, testimonial }) => {
    return (
      <div className="testimonial">
        <Image src={avatar} alt={name} className="testimonial-avatar" />
        <div className="testimonial-info">
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-position">{position}</p>
          <p className="testimonial-text">{testimonial}</p>
        </div>
      </div>
    );
  };
  
  export default Testimonial;