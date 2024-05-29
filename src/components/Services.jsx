import React from "react";
import Pooja from "../assets/images/pooja.png";
import Darshan from "../assets/images/darshan.png";
import Aarti from "../assets/images/aarti.png";
import Accommodity from "../assets/images/Accommodation.png";
import Publications from "../assets/images/publications.png";
import Donate from "../assets/images/donate1.png";
import membership from "../assets/images/membership.png";

import "../styles.css";

const Services = () => {
  return (
    <section>
      <div className="title-wrapper about-title-wrapper">
        <div className="about-head">
          <h3>
            <span className="about-head-span">Online Services</span>
          </h3>
        </div>
      </div>

      <div className="services">
        <p>
          Shri Saibaba Sansthan Trust, Shirdi is pleased to launch next
          generation portal for availing Darshan, Aarti, Donation,
          Accommodation, Pooja, Membership and Publications services. Please
          click on the below links to avail the services.
          <hr className="bl" />
        </p>
        <div className="ser-icons">
          <div className="first">
            <div
              className="e-card playing"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Darshan} alt="" className="image  " />
                <br />
                Darshan
                <br />
              </div>
            </div>

            <div
              className="e-card playing"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Aarti} alt="" className="image" />
                <br />
                Aarti
                <br />
              </div>
            </div>

            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Pooja} alt="" className="image" />
                <br />
                Pooja
                <br />
              </div>
            </div>
          </div>

          <div className="second">
            <div
              className="e-card playing"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Publications} alt="" className="image" />
                <br />
                Publications
                <br />
              </div>
            </div>

            <div
              className="e-card playing"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Accommodity} alt="" className="image" />
                <br />
                Accommodation
                <br />
              </div>
            </div>
            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Donate} alt="" className="image white-image" />
                <br />
                Donate
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
