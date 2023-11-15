import React, { useState } from 'react'
import "./Portfolio.scss"
import Portfoliolist from '../portfoliolist/Portfoliolist'
import {
  featuredPortfolio,
  webappPortfolio,
  mobileappPortfolio,
  designPortfolio,
} from './data.js'
import { useEffect } from 'react';
import Portfoliocards from './Portfoliocards';

export default function Portfolio() {
  const [select, setselect] = useState('featured');
  const [list,setdata]=useState([]);

useEffect(() => {
  // return () => {
    switch (select) {
      case "featured":
        setdata(featuredPortfolio);
        break;
      case "webapp":
        setdata(webappPortfolio);
        break;
      case "mobileapp":
        setdata(mobileappPortfolio);
        break;
      case "design":
        setdata(designPortfolio);
        break;
    
      default:
        setdata(featuredPortfolio)
        break;
    }
  // }
}, [select])


  const data = [
    {
      id: 'featured',
      name: 'Featured'
    },
    {
      id: 'webapp',
      name: 'Web App'
    },
    {
      id: 'mobileapp',
      name: 'Mobile App'
    },
    {
      id: 'design',
      name: 'Design'
    }
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <div className='box'>
        <h1>Portfolio</h1>
        <ul>
          {data.map((item) => (
            <Portfoliolist id={item.id} name={item.name} select={select} setselect={setselect}></Portfoliolist>
          ))}
        </ul>
        <div className='container'>
          {list.map((i) => (
            <Portfoliocards image={i.img} name={i.title}></Portfoliocards>
          ))}
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
