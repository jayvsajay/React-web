import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpg';
import Link from '../../UI/Link/Link';
//import { BounceLoader } from 'react-spinners';

const home = () => {
  
  return (
    
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>WELCOME</h1>
            <h2 className='sub-title mb-4'>
              AI BHARATA
            </h2>
           
            <Link target='blog' classes='btn btn-primary rounded-0 mr-2'>
              BLOGS
            </Link>
            
            <Link target='contact' classes='btn btn-primary rounded-0 mr-2'>
              Contact Us
            </Link>

              
            
    
      
          </div>
        </div>
      </div>
    </Section>
  );
};


export default home;
