import React, { useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "./ProjectsData";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className=" body-font  min-h-screen">
      <div className="container mx-auto px-5 py-12">
        <div id="projects" className="text-center mb-12">
          <h1 className="sm:text-5xl text-3xl font-medium title-font mb-3 text-gray-900">
           <span className='text-white'>MY</span> <span className='text-cyan-700'> Projects</span>
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg font-medium leading-relaxed text-orange-600">
            My Works
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {ProjectsData.reverse().map((project) => (
            <div
              key={project.id}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              className="relative overflow-hidden rounded-xl shadow-xl group h-60 w-max-width"  // Adjusted height
            >
              <img src={project.image} alt={project.name} className=" object-center rounded-xl w-full h-60" />
              <div className="absolute inset-0 bg-yellow-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-2">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{project.name}</h3>
                <p className="text-20px text-center text-gray-900 mb-4">{project.description}</p>
                <div className="flex gap-3 mb-4">
                  {project.icons.map((Icon, index) => (
                    <div className="rounded-full bg-purple-700 p-2" key={index}>
                      <Icon className="text-white text-3xl" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-300" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300" href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
