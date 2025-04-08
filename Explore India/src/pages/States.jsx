import React from 'react'
import { indiaFestivals } from '../data'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import { useParams } from 'react-router-dom';

function States() {
  
    
   const data=indiaFestivals;
   console.log(data);
   
   const items=data.map((item)=>(
    <Link to={`./${item.state}`}>
    <div className="states-container">
       <div className="state-image">
       <img src={item.image} alt="" />
       </div>
       <h2>{item.state}</h2>
    </div>
       
    </Link>
    
   ))
   console.log(items)

  return (
    <div className='container'>
      {items}
    </div>
  )
}

export default States
