import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <h6>
                <small className='text-muted'>
                  OU VISION IS DEVELOP A PRODUCT WHICH IS HELPFUL TO OUR SOCIETY
                </small>
                </h6>
              <button className='btn btn-sm btn-primary rounded-0'>
                Learn more
              </button>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>About</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='blog'>Blog</Link>
                </li>
                <li>
                  <Link target='contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Latest News</h6>
            </div>
            <div className='footer-content'>
              <h6>
                <small className='text-muted'>
                COVID-19 Detection using X-RAYs:
                </small>
              </h6>
              <h6>
                <small className='text-muted'>
                COVID-19: Infographics of Infections in India
                </small>
                </h6>
              <h6>
                <small className='text-muted'>
                COVID-19 Detection Strategies:
                
                </small>
                </h6>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <h6 className='text-muted'>
                <small>Address : 123 main street, Bangalore</small>
              </h6>
              <h6 className='text-muted'>
                <small>Phone : +213 8310825074</small>
              </h6>
              <h6 className='text-muted'>
                <small>E-mail : aibharata@email.com</small>
              </h6>
              <a href="www.aibharata.com"><h6>www.aibharata.com </h6></a>
              <div className='social-media mt-4'>
                <a href='!#' className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved. Design By AI-BHARATA</small>
      </div>
    </footer>
  );
};

export default footer;
