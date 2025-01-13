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
  SiRedux
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
   { name: "Postman", logo: <img src={postmanImage} alt="Postman" style={{ width: "80px", height: "80px" }} />, color: "#FF3C37" },
  ];

  const sectionStyle = {
    padding: "4rem 2rem",
    background: "from-black",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  };

  const headerStyle = {
    marginBottom: "3rem",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  };

  const highlightStyle = {
    color: "#ffa500",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#ccc",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    padding: "0 1rem",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#1e1e1e",
    border: "2px solid transparent",
    borderRadius: "10px",
    padding: "1.5rem",
    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
  };

  const iconStyle = {
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginBottom: "1rem",
    color: "#fff",
    fontSize: "2.5rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  };

  const nameStyle = {
    fontSize: "1.1rem",
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#fff",
  };

  return (
    <section id="skills" style={sectionStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>
          My <span style={highlightStyle}>Skills</span>
        </h3>
        <p style={subtitleStyle}>Here are my technical skills</p>
      </div>
      <div style={gridStyle}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              borderColor: skill.color,
            }}
          >
            <div
              style={{
                ...iconStyle,
                background: skill.color,
              }}
            >
              {skill.logo}
            </div>
            <h4 style={nameStyle}>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
