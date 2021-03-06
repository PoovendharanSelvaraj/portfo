import "../styles.css";
import photo from "../images/photo.jpg";
import { FaBriefcase, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrBriefcase, GrHtml5 } from "react-icons/gr";
import { SiCss3, SiJavascript, SiReact, SiRedux } from "react-icons/si";

export const About = () => {
  const handleClick = () =>
    window.open(
      "https://drive.google.com/file/d/13_NHgW49KWm_cqI75iCappRrzxcbh5ra/view?usp=sharing",
      "_blank"
    );
  return (
    <div className="aboutim" style={{ width: "90%", margin: "auto" }}>
      <div className="about">
        <div className="profile">
          <img
            src={photo}
            alt="myPhoto"
            className="alter"
            width="600px"
            height="400px"
          />
        </div>
        <div className="aboutDes">
          <div>
            <h1>Hi 👋 ,I'm </h1>
            <span className="name">Poovedharan Selvaraj</span>
          </div>
          <div className="objectives">
            <p>
              Adaptive and collaborative aspiring full stack web developer
              specialized in MERN Stack and Javascript. Passionate about
              learning and building new things. Looking forward to work as a
              software development engineer in a product based company.
            </p>
          </div>
          <div className="git">
            <div className="button" onClick={handleClick}>
              <a
                className="resume"
                rel="noreferrer"
                href="https://drive.google.com/file/d/13_NHgW49KWm_cqI75iCappRrzxcbh5ra/view?usp=sharing"
                target="_blank"
              >
                resume
              </a>
            </div>
            <a
              className="giticon"
              href="https://github.com/PoovendharanSelvaraj"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/poovendharan-s-39a145167/"
              className="giticon"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
