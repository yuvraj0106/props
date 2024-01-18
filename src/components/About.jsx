// About.jsx

import React, { useState } from 'react';
import backg from '../assets/v915-wit-008-l.jpg';
import mypic from '../resume/uvraj.jpg';  
import './About.css'; // Create a CSS file for styling (About.css)

const About = () => {
  const bg = {
    backgroundImage: `url(${backg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };
  const img = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '15px',
    marginLeft: '45px',
  };
  const main = {
    display: 'flex',
    justifyContent: 'space-evenly',
  };

  const borderedBox = {
    height: '400px',
    width: '800px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px',
  };
  const borderedBoxx = {
    height: '400px',
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px',
  };
  const text = {
    fontFamily: "'Helvetica Neue'",
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px',
    textAlign: 'justify',
  };

  const skill = {
    listStyle: 'none',
    position: 'absolute',
    marginTop: '170px',
    marginRight: '450px',
    border: '1px solid blue',
    padding: '2px',
    backgroundColor: '#4B0082',
    borderRadius: '5px',
  };
  const ski = {
    listStyle: 'none',
    position: 'absolute',
    marginTop: '400px',
    marginLeft: '-600px',
  };
  const exp = {
    listStyle: 'none',
    position: 'absolute',
    marginTop: '170px',
    marginRight: '250px',
    border: '1px solid blue',
    padding: '2px',
    backgroundColor: '#4B0082',
    borderRadius: '5px',
  };
  const ex = {
    listStyle: 'none',
    position: 'absolute',
    marginTop: '400px',
    marginRight: '-70px',
  };

  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const handleSkillsClick = () => {
    setShowSkills(!showSkills);
    setShowExperience(false);
  };

  const handleExperienceClick = () => {
    setShowExperience(!showExperience);
    setShowSkills(false);
  };

  return (
    <div style={{ ...main, ...bg }}>
      <div className='' style={borderedBoxx}>
        <img src={mypic} alt="Yuvraj" style={img} />
      </div>
      <div className={`rainbowText ${''}`} style={{ ...borderedBox, ...text, animation: 'fadeIn 1s ease-in-out, colorChange 5s infinite' }}>
        <p className="fadeInAnimation">
          <strong>
            I'm Yuvraj Shinde from Solapur, now living in Kothrud, Pune. I finished my Computer Science degree at Tuljaram Chaturachand College in Baramati in 2023. I come from a middle-class family of six members. I recently graduated from T.C. College, Baramati. Currently, I'm immersed in a UI-UX course in Pune. Talking about my strengths, I'm good at learning things quickly and consider myself a self-motivated person. On the downside, I'm a bit sensitive and sometimes expect too much from others.
          </strong>
        </p>
        <li style={skill}>
          <strong>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} onClick={handleSkillsClick}>
              Skills
            </a>
          </strong>
        </li>
        <li style={exp}>
          <strong>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} onClick={handleExperienceClick}>
              Experience
            </a>
          </strong>
        </li>
        {showSkills && (
          <div style={ski}>
            {/* Render your skills data here */}
            <li>UI/UX</li>
            <p>Designer web/App interfaces</p>
            <li>Web Development</li>
            <p>Web App Development</p>
            <li>App Development</li>
            <p>Building Android/iOS Apps</p>
          </div>
        )}
        {showExperience && (
          <div style={ex}>
            {/* Render your experience data here */}
            <li>2023</li>
            <p>UI/UX Designer Training at Techrel Institute</p>
            <li>2023 - 2024</li>
            <p>Graphic Designer at Techrel</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
