import React from 'react'
import image11 from '../images/img11.jpeg'
import image7 from '../images/img7.jpeg'
import '../style/Projects.css'

function Projects() {
  return (
    <div className='app-project'>
    <h1 className='heading'>PROJECTS</h1>
    <div className='main-project'>
    <h2 className='proj-title'>Tuwatunze Initiative </h2>
    <div className='proj-cont'>
          <div className='img-cont'>
              <img src={image11} alt=''  className='proj-img'/>
          </div>
          <div className='description'>
              <p>
              This project involves rescuing vulnerable, orphaned, disabled, and
              marginalized kids, situate them in our partner centers, and subsequently provide for their basic
              needs like food and clothing while they are there.
              </p>
            <h5>Main Focus:</h5>
            <span>Needy children</span>
          </div>
    </div>
    </div>

    <div className='main-project'>
      <h2 className='proj-title'>Tujimudu Project </h2>
  <div className='proj-cont'>
          <div className='img-cont'>
              <img src={image7} alt=''  className='proj-img'/>
          </div>
          <div className='description'>
            <p>
            It focuses on providing technical skills, employing at the Tujimudu workshop, and subsequently making it possible for trainees to start their enterprises in the future through providing
      seed capital funding on top of their savings at the Tujidumu Sacco during their paid-for internship work period. 
            </p>
            <h5>Main Focus:</h5>
            <span>Employment creation</span>
          </div>
      </div>
    </div> 
</div>   
  )
}

export default Projects