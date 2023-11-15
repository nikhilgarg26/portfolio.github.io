import React from 'react'
import "./Topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Topbar({menu,setmenu}) {
  // const [menu, setmenu] = useState(false);


  return (
    <div className={"topbar " + (menu && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>React</a>
          <div className='item'>
            <PhoneIcon />
            <span>88376-77933</span>
          </div>
          <div className='item'>
            <EmailIcon />
            <span>nikhil2212garg@gmail.com</span>
          </div>
        </div>
          
        <div className='right'>
        <div className='hamburger' onClick={()=>setmenu(!menu)}>
          <span className='line line1'></span>
          <span className='line line2'></span>
          <span className='line line3'></span>
        </div>  
        </div>
      </div>
    </div>
  )
}
