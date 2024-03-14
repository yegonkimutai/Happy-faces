import React from 'react'
import image11 from '../images/img11.jpeg'
import '../style/Projects.css'

function Projects() {
  return (
    <div>
         <h1 className='proj-title'>Project 1: Tuwatunze Initiative </h1>
         <div className='proj-cont'>
         <div className='cont'>
        <div className='img-cont'>
            <img src={image11} alt=''  className='proj-img'/>
        </div>
        <div className='description'>
            This project involves rescuing vulnerable, orphaned, disabled, and
            marginalized kids, situate them in our partner centers, and subsequently provide for their basic
            needs like food and clothing while they are there.
        </div>
    </div>
    </div>

         <h1 className='proj-title'>Project 2: Tujimudu Project </h1>
    <div className='proj-cont'>
         <div className='cont'>
        <div className='img-cont'>
            <img src={image11} alt=''  className='proj-img'/>
        </div>
        <div className='description'>
      It focuses on providing technical skills, employing at the Tujimudu workshop, and subsequently making it possible for trainees to start their enterprises in the future through providing
    seed capital funding on top of their savings at the Tujidumu Sacco during their paid-for internship work period. 'Tujimudu' is a Swahili word that means 'to be sustainable'.
    Targeted individuals The program is between the ages of 16-25 years and is comprised of post-secondary school disabled, marginalized, vulnerable, and orphaned youth who have been raised at 
    rescue centers, children's homes, and vulnerability centers. 

    The major need addressed is the uncertain transition into public life faced by the vulnerable,
    orphaned, disabled, and marginalized youth who have spent a huge part of their childhood living
    at rescue centers, children's homes, and vulnerability centers. The second need being addressed
    is the eradication of poverty and reduction of socio-economic inequalities faced by the
    disadvantaged vulnerable, orphaned, disabled, and marginalized youth, who mostly find
    themselves coming out of these rescue centers and children's homes unskilled and not ready for
    life outside these boundaries. The third problem being solved is the problem is engagement in
    crime, drug abuse, drug peddling, and prostitution by these vulnerable, orphaned, disabled, and
    marginalized youth due to a lack of alternatives for enjoying a decent work environment. The
    other problem being solved is that of unemployment whereby, through technically skilling these
    vulnerable, orphaned, disabled, and marginalized youth and providing them with seed capital,
    they can start their own personally run enterprises that can sustain them after the training period
    has come to an end. The final problem being solved is that of mental health challenges whereby
    providing these vulnerable, orphaned, disabled, and marginalized youth with a chance to enjoy
    almost similar privileges to the rest of the situation, the rates of suicide would go down.
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default Projects