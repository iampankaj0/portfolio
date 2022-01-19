import React from 'react';
import ProPic from '../images/pankajpropic.jpg';
import './intro.css';

const Intro = () => {
  return (
            <>
                <div className='banner-image'>
                    <div className="container">
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='main-div-into'>
                        <div>
                            <img src={ ProPic } alt='profile-pic-pankaj' />
                        </div>
                        <div className='text-sec'>
                            <h2>I'm Pankaj Yadav</h2>
                            {/* <p className='mb-0'>
                                Hire me For <span> Web Developement </span>
                            </p> */}
                            <div class="content">
                              <div class="content__container">
                                    <p class="content__container__text">
                                        Hire me For
                                    </p>
                                                        
                                    <ul class="content__container__list">
                                      <li class="content__container__list__item">Web Designing</li>
                                      <li class="content__container__list__item">Web Development</li>
                                      <li class="content__container__list__item">Managing Your Website</li>
                                      <li class="content__container__list__item">IT Solutions</li>
                                    </ul>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <hr className='seprator' />
                </div>
            </>
  )
};

export default Intro;