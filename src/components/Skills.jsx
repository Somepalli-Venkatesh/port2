import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import htmlImage from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import react from '../assets/images/react.png';
import express from '../assets/images/express.png';
import tailwind from '../assets/images/tailwind.png';

import java from '../assets/images/java.png';
import python from '../assets/images/python.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import javascript from '../assets/images/javascript.png';
import node from '../assets/images/node.png';
import postman from '../assets/images/postman.png';
import mysql from '../assets/images/mysql.png';
import mongodb from '../assets/images/mongodb.png';

const skills = [
  { id: '1', name: 'HTML', image: htmlImage },
  { id: '2', name: 'CSS', image: cssImage },
  { id: '3', name: 'React', image: react },
  { id: '4', name: 'Express', image: express },
  { id: '5', name: 'Tailwind', image: tailwind },
  { id: '6', name: 'Java', image: java },
  { id: '7', name: 'Python', image: python },
  { id: '8', name: 'git', image: git },
  { id: '9', name: 'Github', image: github },
  { id: '10', name: 'MySQL', image: mysql },
  { id: '11', name: 'Postman', image: postman },
  { id: '12', name: 'Node', image: node },
  { id: '13', name: 'MongoDB', image: mongodb },
  { id: '14', name: 'JavaScript', image: javascript },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills" className="py-10  text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="text-gray-400 mt-3 text-lg"
        >
          My Technical Expertise
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-center justify-center mt-12 gap-5 flex-wrap max-w-6xl mx-auto px-4 md:px-8"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-item border-2 group border-cyan-500 relative w-[45%] md:w-[22%] lg:w-[18%] bg-gray-700 p-4 rounded-xl flex flex-col items-center justify-center text-center mb-6"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full overflow-hidden mb-4">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-contain transition duration-700 hover:scale-125"
              />
            </div>
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
