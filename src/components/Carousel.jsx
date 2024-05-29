import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Flower from "../assets/images/flower.png";

// import images from "../Data/slideimg.json"
import Img1 from "../assets/images/1.webp";
import Img2 from "../assets/images/2.webp";
import Img3 from "../assets/images/3.png";
import Img4 from "../assets/images/4.png";
import Img5 from "../assets/images/5.png";
import GoldPlate from "../assets/images/gold.png";

const images = [
  {
    id: "1",
    img: Img1,
  },
  {
    id: "2",
    img: Img2,
  }

];

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image) => (
            <div
              className={`embla__slide ${
                image.id === images.length - 1 ? "last-slide" : "second-slide"
              }`}
              key={image.id}
            >
              <img src={image.img} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="gold-plate carousel-gold-plate">
        <img src={GoldPlate} alt="" width={500} className="goldimg" />
      </div>

      <div className="containers">
        <div className="wrapper">
          <div
            className=" text carousel-text"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p>
              Devotees are hereby informed that make donations in the Donation
              Office of Shree Saibaba Sansthan in Temple premises at Shirdi and
              obtain an official receipt. Donations can also be done through the
              official website{" "}
              <a href="#" className="carousel-a-tag">
                <span className="blink">https://online.sai.org.in </span>
              </a>
              , and obtain an online receipt. These donations will reach Shree
              Saibaba Sansthan Trust, Shirdi.
            </p>
          </div>

          <div
            className="text"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            <p>
              Application for Sai Seva at Shri Saibaba Temple, Shirdi{" "}
              <a href="#" className="carousel-a-tag">
                {" "}
                <span className="blink">Click here to apply</span>
              </a>
            </p>
          </div>
        </div>

        <div className="wrap-icon">
          <img src={Flower} alt="" className="flower" />
        </div>

        <div className="wrapper">
          <div className="text" data-aos="fade-left" data-aos-duration="1500">
            <p>
              Collection of any Money, Valuables, Shawls, Clothes or other
              materials by any other website, YouTube or other channels, temple,
              organization or any other entity for any Pooja, offering etc. is
              illegal and offence, as they are not authorized.
            </p>
          </div>

          <div
            className="text"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <p>
              Devotees be beware that (Except Tatasky) Other Channels’ alleged
              Live Darshan is illegal and false and they and their sponsors are
              liable for legal action. For Real Time Official Live Darshan of
              Shree Sai Baba Samadhi Mandir, Shirdi{" "}
              <a href="#" className="carousel-a-tag">
                <span className="blink">Click here</span>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
