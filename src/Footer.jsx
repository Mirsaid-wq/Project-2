import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer conatiner">
      <div className="footer-container">
        <h2 className="logo">Mirro</h2>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Pages</h4>
            <ul className="footer_ul">
              <li>Home</li>
              <li>Store</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <h4 className="si">Store categories</h4>
            <ul className="suu">
              <li>Presets</li>
              <li>Prints</li>
            </ul>
          </div>

          <div className="footer-column_2">
            <h4>Preset Packs</h4>
            <ul>
              <li>Mirro Preset Pack Vol. 01</li>
              <li>Mirro Preset Pack Vol. 02</li>
              <li>Mirro Preset Pack Vol. 03</li>
              <li>Mirro Preset Pack Vol. 04</li>
            </ul>
            <h4 className="sa">Business Areas</h4>
            <ul>
              <li> Wedding Photography</li>
              <li>Sports Photography</li>
              <li>Portrait Photography</li>
              <li>Architecture Photography</li>
              <li>Animal Photography</li>
              <li>Food Photography</li>
              <li>Nature Photography</li>
            </ul>
          </div>

          <div className="footer-column_3">
            <h4>Utility Pages</h4>
            <ul>
              <li>Instructions</li>
              <li>Style guide</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>404</li>
            </ul>
          </div>

          <div className="footer-column_4 newsletter">
            <h4>Newsletter</h4>
            <p>
              Subscribe to my newsletter where I share news about upcoming
              printings and preset sales.
            </p>
            <div className="newsletter-input">
              <input type="email" placeholder="Email address" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Mirro Photography, LLC. All rights reserved. Powered by Webflow.
        </p>
        <div className="social-icons">
          <img src="/Frame (7).png" alt="Frame 7" />
          <img src="/Frame (8).png" alt="Frame 8" />
          <img src="/Frame (9).png" alt="Frame 9" />
          <img src="/Frame (10).png" alt="Frame 10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
