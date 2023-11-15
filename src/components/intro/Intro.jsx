import React, {useEffect,useRef} from 'react'
// import { init } from 'ityped'
import Typewriter from 'typewriter-effect'
import "./Intro.scss"

export default function Intro() {
  // const myElement = useRef();

  // useEffect(() => {
  
  //     init(myElement.current, {
  //       showCursor: false,
  //       strings: [' Nikhil Garg', ' Welcome to my app!'],
  //       // typeSpeed: 50,
  //       // backSpeed: 50,
  //       // loop: true,
  //     });
  // }, []);


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='image'>
          <img src='assets\20230401123503_IMG_9100-01.jpeg' alt='hello'></img>
        </div>
      </div>
      <div className='right'>
        <div className='text'>
          <h3>Hi There, I am</h3>
          <h1>Nikhil Garg </h1>
          <h3>Web 
          <span>
          <Typewriter 
           options={{ 
           strings:[" Developer", " Designer", " Content Creater"],
           autoStart:true,
           delay:80,
           loop:true
           }}
           />
           </span>
          </h3>
        </div>
        <div className='down'>
          <a href='#portfolio'><img src='assets\down.png'></img></a>
        </div>
      </div>
    </div>
  )
}
