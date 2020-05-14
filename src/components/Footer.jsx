import React from 'react';
import './Footer.css';
import { FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';


const Footer = () => (
  <>
    <footer>
      <div className="footer-container">
        <div className="footer-logo-container">
          GitHub Fighters
        </div>
        <div className="social-container">
          <div className="footer-title">Social</div>
          <ul className="footer-list">
            <li className="footer-li">
              <a href="https://www.linkedin.com/in/roger-fabrice/" target="_blank" rel="noopener noreferrer">
                Fabrice ROGER
                {' '}
                <FaLinkedin />
              </a>
            </li>
            <li className="footer-li">
              <a href="https://www.linkedin.com/in/stephaine-pantiez-a310b31a4/" target="_blank" rel="noopener noreferrer">
                Stéphaine PANTIEZ
                {' '}
                <FaLinkedin />
              </a>
            </li>
            <li className="footer-li">
              <a href="https://www.linkedin.com/in/brian-thellier/" target="_blank" rel="noopener noreferrer">
                Brian THELLIER
                {' '}
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className="wcs-container">
          <div className="footer-title">Wcs</div>
          <ul className="footer-list">
            <li className="footer-li">
              <a href="https://www.wildcodeschool.com/fr-FR/campus/reims" target="_blank" rel="noopener noreferrer">
                Wild Code Shool
                {' '}
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>

        <div className="resource-container">
          <div className="footer-title">Resource</div>
          <ul className="footer-list">
            <li className="footer-li">
              <a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer">
                API
                {' '}
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rights-reserved">
        © 2020 GitHub Fighters - All rights reserved.
      </div>
    </footer>
  </>
);

export default Footer;
