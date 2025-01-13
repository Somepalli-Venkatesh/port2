import React from "react";
import hero from "../assets/images/2.png";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const social_media = [
    { icon: "logo-instagram", url: "https://www.instagram.com/sathwik.uk" },
    { icon: "logo-twitter", url: "https://www.facebook.com/sampengala.sathwik" },
    { icon: "logo-linkedin", url: "https://www.linkedin.com/in/sathwik-uday-kiran-sampengala-3ba12a23b/" },
    { icon: "logo-github", url: "https://github.com/SathwikUK" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span className="text-cyan-600">Sathwik</span><span> Uday Kiran</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="btn-primary mt-8"
          >
            Contact Me
          </ScrollLink>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
