import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-divider"></div>
      <div className="footer-line-1">SUBSCRIBE</div>
      <div className="footer-line-2">FOR NEW UPDATES & RECIPES</div>
      <form className="footer-email-signup">
        <input defaultValue="EMAIL ADDRESS"></input>
        <button>SUBMIT</button>
      </form>
      <div className="footer-social-links">
        <a href="https://www.facebook.com/zourdough">
          <img
            src="/public/assets/img/social/facebook.png"
            alt="Facebook Social Icon"
          />
        </a>
        <a href="https://www.instagram.com/zourdough.starters/">
          <img
            src="/public/assets/img/social/instagram.png"
            alt="Instagram Social Icon"
          />
        </a>
      </div>
      <div className="footer-line-3">
        <a href="https://www.instagram.com/zourdough.starters/">#ZOURDOUGH</a>
      </div>
      <div className="footer-line-4">
        <a href="mailto:zourdoughstarter@live.com?subject=I need help with my Zourdough!">
          CONTACT US
        </a>
      </div>
      <div className="footer-line-5">© 2022 ZOURDOUGH</div>
      <div className="footer-line-6">
        <a href="https://github.com/chiefmikey">MADE BY CHIEFMIKEY</a>
      </div>
    </div>
  );
};

export default Footer;
