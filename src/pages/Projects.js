import React from 'react'
import image1 from '../images/HPphoto2.jpg'
import image2 from '../images/HPphoto1.jpg'
import '../style/Projects.css'

function Projects() {
  return (
    <section className='app-project'>
      <h2 className='proj-title'>PROJECTS</h2>
      <div className='main-project'>
        <div className='project-box'>
          <img src={image1} alt=''  className='proj-img'/>
          <div className='proj-layer'>
            <h4>Tuwatunze Initiative</h4>
            <p>
            This project involves rescuing vulnerable, orphaned, disabled, and
            marginalized kids, situate them in our partner centers, and subsequently provide for their basic
            needs like food and clothing while they are there.
            </p>
          </div>
        </div>

        <div className='project-box'>
        <img src={image2} alt=''  className='proj-img'/>
        <div className='proj-layer'>
          <h4>Tujimudu Project </h4>
          <p>
          It focuses on providing technical skills, employing at the Tujimudu workshop, and subsequently making it possible for trainees to start their enterprises in the future through providing
          seed capital funding on top of their savings at the Tujidumu Sacco during their paid-for internship work period. 
          </p>
        </div>
      </div>
      </div>
      

      
    </section>
  )
}

export default Projects