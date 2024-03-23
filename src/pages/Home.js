/* eslint-disable default-case */
import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import logo from '../images/HPLogo.jpeg'
import '../style/Home.css'

export default function Home() {
  //   const [count, setCount] = useState(0);
  //   const [margin, setMargin] = useState('0%');
  //   const [forward, setForward] = useState(true);

  // const shift = (count) => {
  //   switch (count) {
  //     case 0:
  //       setMargin('0%')
  //       break;
  //       case 1:
  //       setMargin('-20%')
  //       break;
  //       case 2:
  //       setMargin('-40%')
  //       break;
  //       case 3:
  //       setMargin('-60%')
  //       break;
  //       case 4:
  //       setMargin('-80%')
  //       break;
  //   } 
  // }

  // if(forward) {
  //   for(let i = 0; i < 5; i ++) {
  //     setTimeout(() => {
  //       if(count===5) {
  //         setForward(false)
  //       } else {
  //         setCount(count + 1)
  //         shift(count)
  //       }
  //     }, 2000)
  //   }
  // } else {
  //   for(let i = 5; i > 0; i --) {
  //     setTimeout(() => {
  //       if(count===0) {
  //         setForward(true)
  //       } else {
  //         setCount(count - 1)
  //         shift(count)
  //       }
  //     }, 1000)
  //   }
  // }

  return (
    <>
     <section className='main-home'>
      <div className='home-content '>
        <h3>Hello, Welcome to</h3>
        <h1>HAPPY FACES</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus facilis quaerat cumque amet accusamus obcaecati dicta laboriosam veritatis? Mollitia?
        </p>
        <div className='home-socials'>
          <a href='' > <IoLogoInstagram/> </a>
          <a href=''> <FaTwitter/> </a>
          <a href=''> <FaWhatsapp /> </a>
        </div>
        <button className='home-btn'>
          Send Email
          <span className='icon-home'><SiMinutemailer /></span>
        </button>
      </div>
      <div className= 'car-cont'>
        <img src={logo} alt=''/>
      </div>
     </section>
    </>
  );
}