import { useState } from 'react';
import * as React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { IoLogoInstagram } from 'react-icons/io';

const Footer = () => {
  const [email, setEmail] = useState('');

  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.children[0] as HTMLInputElement).value;
    event.currentTarget.blur();
    // write email to accessible list
    setEmail('');
  };

  return (
    <div className="footer-container">
      <div className="footer-divider"></div>
      <div className="footer-subscribe">
        <div className="footer-line-1">SUBSCRIBE</div>
        <div className="footer-line-2">FOR NEW UPDATES & RECIPES</div>
      </div>
      <form
        className="footer-email-signup"
        onSubmit={(event) => submitEmail(event)}
      >
        <input
          className="footer-email-signup-input"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="footer-email-signup-button">SUBMIT</button>
      </form>
      <div className="footer-social-links">
        <a href="https://www.facebook.com/zourdough">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/zourdough.starters/">
          <IoLogoInstagram />
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
