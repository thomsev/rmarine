/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./homepage.css";
import image1 from "../../assets/slide1.jpg";
import image2 from "../../assets/slide2.jpg";
import image3 from "../../assets/slide3.jpeg";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import label1 from "../../assets/label1.jpg";
import label2 from "../../assets/label2.jpg";
import label3 from "../../assets/label3.png";
import label4 from "../../assets/label4.png";


const images = [bg1, bg2, bg3, bg4, bg5];

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        console.log("Current image index is now:", newIndex); // For debugging
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <section className="welcome-image">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Welcome Slide ${index}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </section>

      <section className="content">
        <div data-aos="fade-right">
          <img src={image2} alt="Image 1" />
          <h2>Båter og motorer</h2>
          <p>Nye båter og båtmotorer</p>
        </div>

        <div data-aos="fade-right">
          <img src={image3} alt="Image 1" />
          <h2>Båter og motorer</h2>
          <p>Nye båter og båtmotorer</p>
        </div>

        <div data-aos="fade-right">
          <img src={image2} alt="Image 1" />
          <h2>Båter og motorer</h2>
          <p>Nye båter og båtmotorer</p>
        </div>

        <div data-aos="fade-right">
          <img src={image2} alt="Image 1" />
          <h2>Båter og motorer</h2>
          <p>Nye båter og båtmotorer</p>
        </div>

  <div className="logos-container" data-aos="fade-up">
  <div className="logo">
    <img src={label1} alt="Logo 1" />
  </div>
  <div className="logo">
    <img src={label2} alt="Logo 2" />
  </div>
  <div className="logo">
    <img src={label3} alt="Logo 3" />
  </div>
  <div className="logo">
    <img src={label4} alt="Logo 4" />
  </div>
</div>

      </section>
    </div>
      
  );
};

export default Homepage;
