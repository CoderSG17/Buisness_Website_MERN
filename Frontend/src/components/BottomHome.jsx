import React from 'react'
import img2 from '../images/photo-1486406146926-c627a92ad1ab.avif'


const BottomHome = () => {
  return (
    <div className='main' style={{marginTop:"30px"}} >
    <div className="rightdiv ">
    <img src={img2} alt="error" className='img' />

    </div>
    <div className="leftdiv">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quam!</p>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      <p style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sequi. Eum dolorum cumque distinctio voluptas laboriosam culpa at, rerum aut!</p>
      <div className='innerleftdiv'>

        <button className='butn'><a style={{textDecoration:"none" ,color:"black"}} href="/contact">Connect Now</a></button>
        <button className='butn1'><a style={{textDecoration:"none" ,color:"black"}} href="/about">Learn More</a></button>
      </div>
    </div>
  </div>
  )
}

export default BottomHome