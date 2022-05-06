import { FaBriefcase } from "react-icons/fa";
import { GrBriefcase } from "react-icons/gr";

import "../styles.css";

export const Navbar = () => {
  const darkmode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("btn");
  };
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">
        <FaBriefcase />
      </a>
      <a href="#project">Project</a>
      <a href="#skills">Skills</a>
      <div className="dropdown">
        <a href="#contact">
          <p className="dropbtn">Contact</p>
        </a>

        <label className="switch">
          <input onChange={darkmode} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        &#9776;
      </a>
    </div>
  );
};

//<div id="navbar" className="navbar">
{
  /* <div className="homeicon" style={{ margin: "10px 0px" }}>
<FaBriefcase fontSize="50px" />
</div>
<div className="nav-div1">
<ul>
  <li>
    <a href="#project">Projects</a>
  </li>
  <li>
    <a href="#skills">Skills</a>
  </li>
  <li>
    <a href="#contact">Contact</a>
  </li>
</ul>
<label class="switch">
  <input onChange={darkmode} type="checkbox" />
  <span class="slider round"></span>
</label>
</div>
</div> */
}
