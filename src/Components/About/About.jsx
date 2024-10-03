import React from 'react'
import './About.css'
import rushi from './media/back.png'
import SkillList from '../Myskill/MySkill'
import {useGSAP} from '@gsap/react';
import gsap  from 'gsap';
import Education from '../Education/Education';


// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const About = () => {

  useGSAP (()=>{
    gsap.to(".skills-header",{
      x:660,
    })
  })

 
  // useGSAP (()=>{
  //   gsap.to(".photo",{
  //     y:-20,
     
  //   })
  // })




  return (







<>
<div className='About mb-4' id='About'>
<section className="about-me bg-dark ">
      <div className="about-me-content">
        <h2 className="about-me-title text-light">About Me</h2>
        <p className="about-me-description">
          Hi! I'm Rushikesh, a passionate front-end developer with a love for crafting beautiful and responsive web applications. With a strong background in HTML, CSS, JavaScript and experience working with frameworks like React , I enjoy turning complex problems into simple, elegant solutions.
        </p>
        <p className="about-me-description">
          When I'm not coding, you'll find me exploring various forts, playing cricket, or tracking on mountains. I'm always excited to learn new things and take on new challenges!
          <h4 className='text-light'>Languages:</h4>
       <ul className='text-light '>
        <li>English</li>
        <li>Marathi</li>
        <li>Hindi</li>
       </ul>
        </p>
       
        
      </div>
      <div className="about-me-image">
        {/* Add your image source here */}
        <img src={rushi} alt="Your Name" className='mx-5' />
      </div>
    </section>
</div>
<Education/>

        {/* skills */}
        
            <div className="MySkill col-md-10 col-sm-12">
              <h3 className='skill-header'>My Skills++</h3>
             
            </div>
            {/* </> */}
            <SkillList/>
        
     
         
   
    </>
  )
}

export default About