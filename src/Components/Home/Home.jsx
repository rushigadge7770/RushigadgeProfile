import React from 'react'
import './Home.css';
import home from  '../profilestickers/laptop one.png'


import About from '../About/About';
import Work from '../work/Work';
import Contact from '../Contact/Contact';


const Home = () => {




  return (
    <>
    <body className='body'>
       <div className="container-fluid">
       {/* Introduction */}
        <div className="row">
            <div className="Intro col-md-5 col-sm-10 my "  >
              <h6 className='hi mx-5' style={{fontSize:"60px"}}>Hello..!! </h6>
              <div className="row">
                <div className="col-md-12 col-sm-10 ">
                  <h1 className='h  mx-5 fw-bold fs-2'>My Name Is Rushi </h1>
                </div>
              </div>
              <div className="row">
              <div className="col-md-11 col-sm-9  ">
                <p className='pro text-light' style={{margin:"0px 0px 10px 50px"}}>Im<b className='text-danger' style={{fontSize:"30px"}}> MeRn Stack DeVeLoPeR</b> Because I Love Creating Beautiful User Experience </p>
              </div>
              </div>
              <div className="row">
              <div className="col-md-12 col-sm-8 ">
                <button  className='btn1 bg-opacity-25'><a href="#Contact" className='a nav-link text-center'>Get in touch</a></button>
              </div>
              </div>
           </div>

           {/* Image intro */}
           <div className="col-md-5 col-sm-10 d-flex" >
           <img src={home} className='home img-fluid my-1' alt="/"  />
          
           </div>  
        </div>
       
      
         
       </div>
     
    </body>
    <About/>
    <Work/>
    <Contact/>
    </>
  )
}

export default Home