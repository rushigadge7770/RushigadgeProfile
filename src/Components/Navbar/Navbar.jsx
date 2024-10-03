import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {useGSAP} from '@gsap/react';
import gsap  from 'gsap';
// import logo from '../Media/memoji_nav.jfif'

export const Navbar = () => {
  useGSAP(()=>{

    gsap.to("#box",{
     x:100,
      duration:11,
      ease:"bounce(1,1)"
  })
gsap.from(".list1",{
 x :360,
       ease:"bounce.inout(1,1)"
})
});

  return (
    <>
        <nav className='abc navbar navbar-expand-lg  '>
          <NavLink  to='/' className=' navbar-brand text-light text-decoration-none mx-4 fw-bolder' id='box' style={{fontFamily:'cursive'}} >  My Universe</NavLink>
          <button class="na navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header text-dark fw-bolder text-decoration-none mx-4 fw-bolder">My Universe
        <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="close">
        </button>
        </div>
      <div className="abc offcanvas-body  " style={{fontFamily:'fantasy'}}>
        <ul className="navbar-nav mx-auto justify-content-between">
          <li className="nav-item mx-5 ">
            <NavLink to='/' className="list1 nav-link active mx-1 text-light"   aria-current="page"><h5>Home</h5></NavLink>  
          </li>
          <li className="nav-item">
            <a href='#About' className="list1 nav-link active  text-light  "  aria-current="page" ><h5>About</h5></a>  
          </li>
          <li className="nav-item">
            <a href='#Work' className="list1 nav-link active mx-5 text-light " aria-current="page" ><h5>Work</h5></a>  
          </li>
          <li className="nav-item">
            <a href='#Contact' className="list1 nav-link active m text-light  " aria-current="page" ><h5>Contact</h5></a>  
          </li>
          
        </ul>
         
        
      </div>
    </div>
        </nav>
    </>
  )
}
