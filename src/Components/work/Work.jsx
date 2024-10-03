
import React, { useState } from 'react';
import './Work.css';
import {useGSAP} from '@gsap/react';
import gsap  from 'gsap';
import gym from './media/project1.png'
import project2 from './media/project2.png'
import project3 from  './media/Project3.png'
import buffer from './media/Buffering.webp'

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Gym Website',
    category: 'Web Development',
    image: gym ,
    description: 'A fully responsive website built with HTML, CSS, and JavaScript.', 
    link: 'https://fit-life-gym-management-dbqonm9w1-rushigadge7770s-projects.vercel.app/',
    code :'https://github.com/rushigadge7770/FitLife-Gym-Management'
  },
  {
    id: 2,
    title: 'Weather Forecast Website',
    category: 'React-js',
    image: project2 ,
    description: 'A cross-platform mobile app developed with React Native.',
    link: 'https://weather-git-main-rushigadge7770s-projects.vercel.app/',
    code:'https://github.com/rushigadge7770/Weather'
  },
  {
    id: 3,
    title: 'Movie clone Frontend',
    category: 'Web Application',
    image:project3 ,
    description: 'A modern UI/UX design for an Movie watching platform.',
    link: '#'
  },
  {
    id: 4,
    title: 'Fullstack E-commerce website',
    category: 'MERN Stack Web Development',
    description: '....Coming very soon',
    image:buffer ,
    link: '#'
  },
 
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filterProjects = (category) => {
    setSelectedCategory(category);
  };



    useGSAP(()=>{
  
      gsap.to("#mywork",{
       x:620,
       
       
    })
    })

  return (
    <section className="my-work" id='Work'>
        <div className="mywork col-md-6 col-sm-12" >
<h2 id='mywork'> ' My WoRk '</h2>
</div>

     
      <div className="project-gallery my-5">
        {projects
          .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
          .map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.code} className="project-code" target="_blank" rel="noopener noreferrer" >Source code</a>
              </div>
            </div>
          ))}
      </div>
      <div className="filter-buttons">
        <button onClick={() => filterProjects('All')} className={selectedCategory === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => filterProjects('Web Development')} className={selectedCategory === 'Web Development' ? 'active' : ''}>Web Development</button>
        <button onClick={() => filterProjects('React-js')} className={selectedCategory === 'React-js' ? 'active' : ''}>React-js</button>
        <button onClick={() => filterProjects('Web Application')} className={selectedCategory === 'Web Application' ? 'active' : ''}>Web Application</button>
        <button onClick={() => filterProjects('MERN Stack Web Development')} className={selectedCategory === 'MERN Stack Web Development' ? 'active' : ''}>E-Commerce Website</button>
      </div>
    </section>
  );
};

export default Work;
