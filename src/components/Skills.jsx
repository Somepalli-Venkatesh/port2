import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiGit,
  SiMongodb,
  SiC,
  SiRedux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import postmanImage from "../assets/images/postman.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", logo: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", logo: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", logo: <SiReact />, color: "#61DAFB" },
    { name: "Redux Toolkit", logo: <SiRedux />, color: "#764ABC" },
    { name: "Express JS", logo: <SiExpress />, color: "#110011" },
    { name: "GitHub", logo: <SiGithub />, color: "#181717" },
    { name: "Node JS", logo: <SiNodedotjs />, color: "#339933" },
    { name: "Java", logo: <FaJava />, color: "#007396" },
    { name: "Python", logo: <SiPython />, color: "#3776AB" },
    { name: "MySQL", logo: <SiMysql />, color: "#4479A1" },
    { name: "Git", logo: <SiGit />, color: "#F05032" },
    { name: "MongoDB", logo: <SiMongodb />, color: "#47A248" },
    { name: "C", logo: <SiC />, color: "#A8B9CC" },
    {
      name: "Postman",
      logo: (
        <img
          src={postmanImage}
          alt="Postman"
          style={{ width: "80px", height: "80px" }}
        />
      ),
      color: "#FF3C37",
    },
  ];

  return (
    <section id="skills" className="py-10 bg-black text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold mb-2">
          My <span className="text-orange-500">Skills</span>
        </h3>
        <p className="text-gray-400 text-lg">
          Here are my technical skills
        </p>
      </div>
      <div className="flex items-center justify-center mt-12 gap-5 flex-wrap max-w-6xl mx-auto px-4 md:px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-2 group border-transparent relative w-[45%] md:w-[22%] lg:w-[18%] bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 hover:border-current"
            style={{ borderColor: skill.color }}
          >
            <div
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full shadow-lg mb-4"
              style={{ backgroundColor: skill.color }}
            >
              {skill.logo}
            </div>
            <h4 className="text-lg font-medium uppercase">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
