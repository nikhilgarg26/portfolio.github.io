import React from 'react'
import './Sidebar.scss'

export default function Sidebar({menu, setmenu}) {
  return (
    <div className={"sidebar " + (menu && "active")}>
        <ul>
            <li onClick={()=>setmenu(false)}><a href='#intro'>Home</a></li>
            <li onClick={()=>setmenu(false)}><a href='#portfolio'>Portfolio</a></li>
            <li onClick={()=>setmenu(false)}><a href='#works'>Works</a></li>
            <li onClick={()=>setmenu(false)}><a href='#testimonials'>Testimonials</a></li>
            <li onClick={()=>setmenu(false)}><a href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}
