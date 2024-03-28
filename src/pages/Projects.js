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
            This project involves rescuing vulnerable, orphaned, disabled, and marginalized kids in order to situate them in our partner centres. Subsequently, we tend to provide for their basic needs, such as food and clothing while they are there.
            </p>
          </div>
        </div>

        <div className='project-box'>
        <img src={image2} alt=''  className='proj-img'/>
        <div className='proj-layer'>
          <h4>Tujimudu Project </h4>
          <p>
          This project focuses on providing technical skills and employment at the Tujimudu workshop. Furthermore, the project makes it possible for trainees to start their own enterprises in the future. This is made feasible by providing seed capital funding on top of their savings at the Tujidumu Sacco during their paid-for internship work period.
          </p>
        </div>
      </div>
      </div>
      

      
    </section>
  )
}

export default Projects