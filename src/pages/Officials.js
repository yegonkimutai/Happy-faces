import React from 'react'
import portrait from '../images/Portrait exp.jpg'
import '../style/Officials.css'

function Officials() {
  return (
    <>
        <h1 className='official-header'>OFFICIALS</h1>
        <div className='official-main'>
            <div className='port-main'>
                <img src={portrait} alt='' className='port-img'/>
                <h3>Name:</h3>
                <h5>Title:</h5>
            </div>

            <div className='port-main'>
                <img src={portrait} alt='' className='port-img'/>
                <h3 className='port-name'>Name:</h3>
                <h5 port-desc>Title:</h5>
            </div>

            <div className='port-main'>
                <img src={portrait} alt='' className='port-img'/>
                <h3>Name:</h3>
                <h5>Title:</h5>
            </div>
        </div>
    </>
  )
}

export default Officials