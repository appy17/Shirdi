import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple,
} from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="quick">
          <div>
            <h2>Quick Links</h2>
          </div>
          <div className="ele-wrap">
            <div className="ele">
              <ul>
                <li>Work Tenure</li>
                <li>RTI ACT Section-4</li>
                <li>Sansthan Regulations</li>
                <li>Screen Reader Access</li>
                <li>Statistical Reports</li>
              </ul>
            </div>

            <div className="ele">
              <ul>
                <li>Appeal</li>
                <li>Annual Reports</li>
                <li>Resolutions</li>
                <li>Notice</li>
                <li>Information Centers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="quick">
          <h2>Reach Us On</h2>

          <div className="con">
            <h5>For Online Services please do contact on</h5>
            <span>02423-258956, 02423-258963</span>
          </div>

          <div className="con">
            <h5>Help Line No.</h5>
            <span>+91 7588375204 / 7588371245 / 7588373189 / 7588374469</span>
          </div>
        </div>

        <div className="quick">
          <h2>Follow Us On</h2>

          {/* <div className='ico'>
                        <ul>
                            <li><FaFacebook id="facebook"/></li>
                            <li><FaInstagram id="insta"/></li>
                            <li><FaTwitter id="twitter" /></li>
                            <li><FaYoutube id="youtube"/></li>
                            
                        </ul>
                    </div> */}
          <div>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.instagram.com/shreesaibabasansthantrust?utm_medium=copy_link"
                  id="footer-insta-ico-a"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ssstshirdi"
                  id="footer-twit-ico-a"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/user/saibabasansthantrust/videos"
                  target="_blank"
                  id="footer-youtube-ico-a"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/shrisaibabasansthantrustshirdi"
                  id="footer-face-ico-a"
                  target="_blank"
                  className="footer-facebook-a"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>

          <h2>Download App</h2>

          <div className="ico">
            <ul id="down" className="footer-adroid-parent">
              <li>
                <IoLogoAndroid />
              </li>
              <li>
                <FaApple />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-end">
        <div className="footer-term">
          <h4>© Copyright 1998-2024 Shri Saibaba Sansthan Trust, Shirdi</h4>
        </div>
        <div className="term footer-term">
          Terms & Conditions | Terms & Disclaimer | Contact Us
        </div>

        <div className="term footer-term">
          Design and Developed by{" "}
          <strong>
            &#169; <i> Royals WebTech</i>
          </strong>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
