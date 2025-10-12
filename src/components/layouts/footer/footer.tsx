import React from "react";
import "./footer.scss";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="region">
        <div className="region-top">
          <div className="footer__left">
            <a href="#" className="logo">
              <img
                src="https://learnenglish.britishcouncil.org/sites/podcasts/themes/bc_ui/logo.svg"
                alt="Home"
              />
              <h1 className="name">LearnEnglish</h1>
            </a>
          </div>
          <div className="footer__mid">
            <ul className="menu menu--footer nav">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Terms of use</a>
              </li>
              <li>
                <a href="">Accessibility</a>
              </li>
              <li>
                <a href="">Privacy and cookies</a>
              </li>
              <li>
                <a href="">Affiliate programme</a>
              </li>
              <li>
                <a href="">Getting started</a>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <ul>
              <li>
                <a href="">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="region-bottom">
          <p>
            <strong>© British Council</strong>
            <br />
            The United Kingdom's international organisation for cultural
            relations and educational opportunities. <br />A registered charity:
            209131 (England and Wales) SC037733 (Scotland).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
