import React from 'react'
import portrait from '../images/Portrait exp.jpg'
import '../style/Officials.css'

function Officials() {
  return (
    <div className='official-main'>
        <div className='port-main'>
            <div className='port-img'>
                <img src={portrait} alt=''/>
            </div>
            <h3>Name:</h3>
            <h5>Title:</h5>
        </div>

        <div className='port-main'>
            <div className='port-img'>
                <img src={portrait} alt=''/>
            </div>
            <h3>Name:</h3>
            <h5>Title:</h5>
        </div>

        <div className='port-main'>
            <div className='port-img'>
                <img src={portrait} alt=''/>
            </div>
            <h3>Name:</h3>
            <h5>Title:</h5>
        </div>
    </div>
  )
}

export default Officials