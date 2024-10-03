import React from 'react';
import './Contact.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Contact = () => {

  useGSAP (()=>{
  gsap.to("#me",{
    x:650,
  })
})

  return (
    <>
    <div className="container-fluid main"  id='Contact'>
<div className="row">
<div className="col-md-6">
<h3 id='me'>?/Contact us../?</h3>
</div>
</div>
</div>
<footer>
  <div class="footer-content">
    <p>If you'd like to get in touch , feel free to email me or connect with me on social media!</p>
    </div>
    <ul class="contact-info">
      <li>Email: <a href="mailto:rushigadge7770@gmail.com">rushigadge7770@gmail.com</a></li>
      <li>Phone: <a href="tel:+91-7350374001">7350374001</a></li>
      <li>
        Follow me: 
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">Instagram</a> | 
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a> | 
        <a href="https://github.com/rushigadge7770" target="_blank" rel="noreferrer">GitHub</a> |
        <a href="https://wa.link/57luk8" target='_blank' rel="noreferrer">What's Up</a>
      </li>
    </ul>
  
  <div class="footer-bottom">
    <p>&copy; 2024 Rushikesh Gadge. All rights reserved.</p>
  </div>
</footer>

    </>
  );
};

export default Contact;
