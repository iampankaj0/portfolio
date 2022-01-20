import React from 'react';
import './socialLinks.css';

const Sociallinks = () => {
  return (
    <>
      <div className="container social-cont">
        <p>Our Social Links : Stay Connected</p>
        <a href="https://www.facebook.com/iampankaj0" rel='nofollow noopener' title='Facebook' className="facebook"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>
        <a href="https://www.instagram.com/_iampankaj/" rel='nofollow noopener' title='Instagram' className="insta"> <i class="fa fa-instagram" aria-hidden="true"></i> </a>
        <a href="https://twitter.com/iampankaj0" rel='nofollow noopener' title='LinkedIn' className="linkedin"> <i class="fa fa-linkedin" aria-hidden="true"></i> </a>
        <a href="https://www.linkedin.com/in/pankaj-yadav-33462b227" rel='nofollow noopener' title='Twitter' className="twitter"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>
      </div>
      <div className="copyright-cont">
        <div className="container">
          <p>
            <span>Copyright © 2022. All Rights Reserved.</span>
            <span>Designed By: Pankaj Yadav</span>
          </p>
        </div>
      </div>
    </>
  )
};

export default Sociallinks;