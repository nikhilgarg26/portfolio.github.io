import React from 'react'

export default function Portfoliocards({image,name}) {
  return (
        <div className='item'>
          <img src={image}></img>
          <span>{name}</span>
        </div>
  )
}
