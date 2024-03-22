import React from 'react'
import '../style/About.css'
import aboutimg from '../images/HPLogo.jpeg'


function About() {
  return (
   <section className='about'>
      <div className='abt-img'>
        <img src={aboutimg} alt=''/>
      </div>

      <div>
      <h2 className='abt-title'>About</h2>
      <p className='abt-desc'>
          Happy Faces Empowerment Network started as a social welfare group back in 2017 by
    young high schoolers who would visit children's homes, rescue centers, and vulnerability centers
    during holidays. The initial exclusive purpose during the organization's registration was to rescue the kids in need, situate them in our partner centers, and subsequently provide for their basic
    needs like food and clothing while they are there. However, a Daily Nation report of 
    <a href='https://nation.africa/kenya/news/orphanage-children-the-bane-of-turning-18--4217742' target='_blank' rel="noreferrer"> 30th March
    2023 </a> 
    highlighted the plight of these children once they get to the age of 18, where their contract with
    the centers end, and most of them do not get to enjoy a smooth transition into normal lives.
  As a result, the project will allow the youth to become self-dependent once they get to the age of forced transition
    out of the children's homes and rescue centers that have been their homes for almost their whole
    childhood lives. The project provides decent work opportunities for the vulnerable, orphaned,
    disabled, and marginalized youth, assists in eradication of poverty across Kenyan society, and
    minimizes the level of socio-economic inequalities faced by these youths.
      </p>
      <button className='abt-btn'>Read More</button>
      </div>
   </section>
  )
}

export default About