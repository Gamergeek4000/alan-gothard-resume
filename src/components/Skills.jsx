import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <div className="skill-chart" data-percentage="90"></div>
          <p>HTML/CSS</p>
        </div>
        <div className="skill-item">
          <div className="skill-chart" data-percentage="80"></div>
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <div className="skill-chart" data-percentage="75"></div>
          <p>React</p>
        </div>
      </div>
    </section>
  );
}

export default Skills; 