import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs,faCss3Alt,faBootstrap,faReact,faNode,faGitAlt,faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode,faDatabase,faServer} from '@fortawesome/free-solid-svg-icons';
import './MySkill.css'

const  skills = [
  { name: 'HTML', icon: <FontAwesomeIcon icon={faCode} flip style={{color: "#74C0FC",}} /> },
  { name: 'CSS', icon:<FontAwesomeIcon icon={faCss3Alt} bounce style={{color: "#FFD43B",}} />},
  { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} fade style={{color: "#B197FC",}} /> },
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} beatFade style={{color: "#FFD43B",}} /> },
  { name: 'React', icon:<FontAwesomeIcon icon={faReact} spin style={{color: "#74C0FC",}} /> },
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNode} beat style={{color: "#39df0c",}} /> },
//   { name: 'Java', icon:<FontAwesomeIcon icon={faJava} bounce style={{color: "#f94e67",}} /> },
  { name: 'MongoDB', icon:<FontAwesomeIcon icon={faDatabase} fade style={{color: "#74C0FC",}} /> },
//   { name: 'Mysql', icon: <FontAwesomeIcon icon={faDatabase} fade style={{color: "#74C0FC",}} /> },
  { name: 'Express', icon: <FontAwesomeIcon icon={faServer} beat style={{color: "#74C0FC",}} />},
  { name: 'Git', icon: <FontAwesomeIcon icon={faGitAlt} beat style={{color: "#e3580d",}} /> },
  { name: 'Github', icon: <FontAwesomeIcon icon={faGithub} beatFade style={{color: "#74C0FC",}} /> },
  // Add more skills as needed
];

const SkillList = () => {
    return (
      <div> 
        <marquee behavior="scroll" direction="left" loop="8">
        <div className="skills-list d-flex">
            { skills.map(( Skill, index) => (
                <div className="skillset">
                <div key={index} className="skill">
                   <div className="icon"> { Skill.icon}</div>
                    <div className='name'>{ Skill.name}</div>
                </div>
                </div>
                
            ))}
        </div>
        </marquee>
        </div>
        
    );
};
export default SkillList;