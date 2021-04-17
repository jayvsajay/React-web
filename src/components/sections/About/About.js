import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';


const About = () => {
  useEffect(() => {
    AOS.init();
},[])
  return (
    <Section id='about'>
      
      <div className='container pt-2 pb-5 hor-flip' data-aos="fade-up">
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
           <p1> <span>MYAIRA: AI Powered Automated X-ray Analysis</span></p1>
          </h3>
          
            <p1>
            We have developed R&D Artificial Intelligence (AI) system - MYAIRA XRAY to detect 15 lung and chest disorders including COVID19 from Chest X-Rays. The current AI can detect and differentiate between multiple abnormalities with very high sensitivity and specificity. MYAIRA is already deployed at multiple hospitals and has helped to speedup diagnogis and reduce initial time to treatment.</p1>
           <p1> One of the holy grail of AI is that it can be used to identify factors and pointers that are not known to humankind yet, to detect the onset of novel infections such as COVID-19. We believe that we can uncover detection factors that are not yet known in the literature or to doctors, for identifying the progression of multiple disorders, including the novel COVID-19 virus.</p1>
            <p1>You can upload chest x-rays (PA and AP Views) and get predictions from MYAIRA within a fraction of seconds.
           </p1>
          
        </div>
        
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
               
                <a href="/about" class='btn btn-primary rounded-0'>Read more</a>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </Section>
  );
};

export default About;
