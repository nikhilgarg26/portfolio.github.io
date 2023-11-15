import React from 'react'
import './Portfoliolist.scss'

export default function Portfoliolist({id, name, select, setselect}) {
  return (
    <li className={select===id ? 'active':''} onClick={()=>setselect(id)}>{name}</li>
  )
}
