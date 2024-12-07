import React from 'react';
import html2pdf from 'html2pdf.js';

function Hero() {
  const generatePDF = () => {
    const resumeContent = document.createElement('div');
    resumeContent.innerHTML = `
      <div class="resume">
        <div class="sidebar">
          <h2>Alan Gothard</h2>
          <p class="title">Frontend Developer</p>

          <section class="about">
            <h4>About Me</h4>
            <p>Passionate Frontend Developer with 5+ years of experience crafting responsive and user-friendly web applications.</p>
          </section>

          <section class="skills">
            <h4>Personal Skills</h4>
            <ul>
              <li>React/Vue.js</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </section>

          <section class="contact">
            <h4>Contact Info</h4>
            <p>contact@alangothard.com</p>
            <p>(555) 123-4567</p>
            <p>linkedin.com/in/alangothard</p>
            <p>github.com/alangothard</p>
          </section>
        </div>

        <div class="main-content">
          <div class="experience">
            <h4>Professional Experience</h4>
            
            <div class="job">
              <div class="job-title">Senior Frontend Developer</div>
              <div class="company">TechCorp Inc.</div>
              <div class="date">2018 - Present</div>
              <ul>
                <li>Led development of responsive web applications using React and Vue.js</li>
                <li>Mentored junior developers and implemented best practices</li>
                <li>Improved application performance by 40% through optimization</li>
              </ul>
            </div>

            <div class="job">
              <div class="job-title">Frontend Developer</div>
              <div class="company">WebSolutions Ltd.</div>
              <div class="date">2015 - 2018</div>
              <ul>
                <li>Developed and maintained client websites using modern web technologies</li>
                <li>Collaborated with designers to implement pixel-perfect designs</li>
                <li>Reduced load times by 50% through code optimization</li>
              </ul>
            </div>
          </div>

          <div class="education">
            <h4>Education</h4>
            <div class="degree">
              <div class="school">University of Technology</div>
              <div class="date">2015</div>
              <div class="degree-title">Bachelor of Science in Computer Science</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .resume {
        display: flex;
        width: 8.5in;
        height: 11in;
        margin: 0;
        font-family: 'Poppins', sans-serif;
      }

      .sidebar {
        width: 30%;
        background: #1e293b;
        color: #fff;
        padding: 40px 30px;
      }

      .sidebar h2 {
        font-size: 24px;
        margin: 0;
        color: #fff;
      }

      .title {
        color: #60a5fa;
        margin: 5px 0 30px 0;
        font-size: 16px;
      }

      .sidebar h4 {
        color: #60a5fa;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 20px 0 10px 0;
      }

      .sidebar p {
        font-size: 14px;
        line-height: 1.6;
        color: #94a3b8;
      }

      .sidebar ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .sidebar li {
        color: #94a3b8;
        margin: 8px 0;
        font-size: 14px;
      }

      .main-content {
        width: 70%;
        padding: 40px;
        background: #fff;
        color: #1e293b;
      }

      .main-content h4 {
        color: #2563eb;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 0 20px 0;
        border-bottom: 2px solid #2563eb;
        padding-bottom: 5px;
      }

      .job {
        margin-bottom: 25px;
      }

      .job-title {
        font-weight: 600;
        font-size: 16px;
        color: #1e293b;
      }

      .company {
        color: #64748b;
        font-style: italic;
        font-size: 14px;
      }

      .date {
        color: #64748b;
        font-size: 14px;
        margin: 2px 0 8px 0;
      }

      .main-content ul {
        margin: 10px 0;
        padding-left: 20px;
      }

      .main-content li {
        color: #334155;
        margin: 5px 0;
        font-size: 14px;
      }

      .degree {
        margin-bottom: 15px;
      }

      .school {
        font-weight: 600;
        font-size: 16px;
        color: #1e293b;
      }

      .degree-title {
        color: #64748b;
        font-size: 14px;
      }
    `;
    resumeContent.appendChild(styleSheet);

    const opt = {
      margin: 0,
      filename: 'alan-gothard-resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#ffffff'
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait'
      }
    };

    html2pdf().set(opt).from(resumeContent).save();
  };

  return (
    <section id="hero" className="hero">
      <div className="resume-preview">
        <div className="pdf-container">
          <div className="resume">
            <div className="sidebar">
              <h2>Alan Gothard</h2>
              <p className="title">Frontend Developer</p>

              <section className="about">
                <h4>About Me</h4>
                <p>Passionate Frontend Developer with 5+ years of experience crafting responsive and user-friendly web applications.</p>
              </section>

              <section className="skills">
                <h4>Personal Skills</h4>
                <ul>
                  <li>React/Vue.js</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                </ul>
              </section>

              <section className="contact">
                <h4>Contact Info</h4>
                <p>contact@alangothard.com</p>
                <p>(555) 123-4567</p>
                <p>linkedin.com/in/alangothard</p>
                <p>github.com/alangothard</p>
              </section>
            </div>

            <div className="main-content">
              <div className="experience">
                <h4>Professional Experience</h4>
                
                <div className="job">
                  <div className="job-title">Senior Frontend Developer</div>
                  <div className="company">TechCorp Inc.</div>
                  <div className="date">2018 - Present</div>
                  <ul>
                    <li>Led development of responsive web applications using React and Vue.js</li>
                    <li>Mentored junior developers and implemented best practices</li>
                    <li>Improved application performance by 40% through optimization</li>
                  </ul>
                </div>

                <div className="job">
                  <div className="job-title">Frontend Developer</div>
                  <div className="company">WebSolutions Ltd.</div>
                  <div className="date">2015 - 2018</div>
                  <ul>
                    <li>Developed and maintained client websites using modern web technologies</li>
                    <li>Collaborated with designers to implement pixel-perfect designs</li>
                    <li>Reduced load times by 50% through code optimization</li>
                  </ul>
                </div>
              </div>

              <div className="education">
                <h4>Education</h4>
                <div className="degree">
                  <div className="school">University of Technology</div>
                  <div className="date">2015</div>
                  <div className="degree-title">Bachelor of Science in Computer Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={generatePDF} className="download-button">
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Hero; 