import React from 'react'
import { useParams } from 'react-router-dom';
import { indiaFestivals } from '../data'
import { useState } from 'react';


function Festival() {
  const {id}=useParams();
  console.log(id);
 
  return (
    <div>
       
    </div>
  )
}

export default Festival
