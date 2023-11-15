import React from 'react'
import "./Testimonials.scss"
import { Testimoni } from './data'

export default function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='reviews'>
      {Testimoni.map((i)=>(
        <div className='reviewitem'>
          <div className='icon'>
            <img src={i.image} alt=''></img>
          </div>
          <div className='reviewtext'>
            <p>{i.review}</p>
            <h3>{i.name}</h3>
            <h3>{i.position}</h3>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
