/* eslint-disable default-case */
import './App.css';
import { useState } from 'react'

import image1 from './images/img1.jpg'
import image2 from './images/img2.jpg'
import image3 from './images/img3.jpg'
import image4 from './images/img4.webp'
import image5 from './images/img5.png'

function App() {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState('0%');
  const [forward, setForward] = useState(true);

  const shift = (count) => {
    switch (count) {
      case 0:
        setMargin('0%')
        break;
        case 1:
        setMargin('-20%')
        break;
        case 2:
        setMargin('-40%')
        break;
        case 3:
        setMargin('-60%')
        break;
        case 4:
        setMargin('-80%')
        break;
    } 
  }

  if(forward) {
    for(let i = 0; i < 5; i ++) {
      setTimeout(() => {
        if(count===5) {
          setForward(false)
        } else {
          setCount(count + 1)
          shift(count)
        }
      }, 2000)
    }
  } else {
    for(let i = 5; i > 0; i --) {
      setTimeout(() => {
        if(count===0) {
          setForward(true)
        } else {
          setCount(count - 1)
          shift(count)
        }
      }, 2000)
    }
  }

  return (
    <div className="App">
      <div className= 'car-cont'>
        <div className='img-cont'>
          <div className='image' style={{marginLeft: margin}}>
          <img src={image1} alt='' />
          </div>
          <div className='image'>
          <img src={image2} alt='' />
          </div>
          <div className='image'>
          <img src={image3} alt='' />
          </div>
          <div className='image'>
          <img src={image4} alt='' />
          </div>
          <div className='image'>
          <img src={image5} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
