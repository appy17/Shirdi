import React, { useEffect } from "react";
import { RiLiveLine } from "react-icons/ri";
import Pillar from "../assets/images/pillar.png";
import Logo from "../assets/download.png";
import Pillar2 from "../assets/images/pillar2.png";
import BG from "../assets/images/bg.png";
import Sai from "../assets/images/sai-front.png";
import Spin from '../assets/images/Circle.png'

import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Chetan
  return (
    <section className="about">
      <style>
        {`
          @-webkit-keyframes aitf {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
      <div className="title-wrapper">
        <div className="about-head">
          <h3>
            <span className="about-head-span">About Us</span>
          </h3>
        </div>
        {/* <div className='img-container'>
                    <img classname='img' src={Logo} alt="" width={100} />
                </div> */}
      </div>

      {/* <div>
        <div className="pillar">
          <img src={Pillar} alt="" className="pillar1-img" />
        </div>

        <div className="pillar2">
          <img src={Pillar2} alt="" className="pillar1-img"/>
        </div>
      </div> */}

      <div className="contain">
        <div
          className="image-div"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src={Spin} alt="" width={550} className="bg" />
          {/* <img src={Spin} alt="" className="sai circle"/> */}
          <img src={Sai} alt="" className="sai" />
        </div>

        <div className="info-div" data-aos="fade-left" data-aos-duration="1500">
          <p>
            Shri Saibaba Sansthan Trust, Shirdi, is the Governing and
            Administrative body of Shri Saibaba's Samadhi Temple and all others
            temples in this premises, and devoted towards teachings of Saibaba{" "}
            <span className="red">"Sabka Malik Ek"</span> and providing
            amenities to Sai devotees who are visiting Shirdi and Sai Samadhi
            Temple.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
      <div className="live" data-aos="fade-up" data-aos-duration="1500">
        <h1>Live Darshan</h1>
        <button className="live-btn">
          Live
          <RiLiveLine className="liveicon" />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
