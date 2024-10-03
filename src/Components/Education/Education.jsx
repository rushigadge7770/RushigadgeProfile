import React from 'react';
import './Education.css';

const Education = () => {
    const educationList = [
        {
          id: 1,
          title: 'BE In Computer Engineering',
          institution: 'ISB&M College of Engineering Nande,Pune',
          duration: '2021 - 2024',
          description: ' Graduated with a focus on modern computing technologies, systems design, and software development',
          tags: ['JavaScript', 'React', 'Algorithms', 'Data Structures']
        },
        {
          id: 2,
          title: 'Diploma in Computer Engineering',
          institution: 'Samarth Polytechnic',
          duration: '2019 - 2021',
          description: 'Completed a comprehensive diploma focused on the fundamentals of computer science and engineering. The coursework combined theoretical knowledge with hands-on projects, including building custom software applications, creating databases, and implementing network architectures',
          tags: ['C', 'C++', 'MySQL', 'TCP/IP', 'LAN/WAN setup']
        },
        {
          id: 3,
          title: 'Higher Secondary Education (HSC)',
          institution: 'Agasti arts,commerce and Dadasaheb Rupwate College of Science Akole',
          duration: '2017 - 2019',
          description: 'Completed Higher Secondary Education with a focus on Science, covering subjects like Physics, Chemistry, Mathematics, and Computer Science.',
          tags: ['Physics', 'Mathematics', 'Computer Science', 'Chemistry']
        },
        {
            id: 4,
            title: 'School Secondary Qualification',
            institution: "SCSMV Mehenduri Akole",
            duration: '2017',
            description: 'Completed coursework in mathematics, science, and humanities. Developed interest in programming through extracurricular activities.',
    tags: ['Mathematics', 'Science', 'Social-Knowledge']
          }
      ];
    
      return (
        <div className="timeline-container">
              <h3 className='skills-header'>\/ Education /\</h3>
             <div >turn on mobile mode</div> 
          <div className="timeline">
            {educationList.map((edu) => (
              <div className="timeline-item" key={edu.id}>
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>{edu.title}</h3>
                  <p><strong>{edu.institution}</strong> | {edu.duration}</p>
                  <p>{edu.description}</p>
                  <div className="tags">
                    {edu.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Education;
