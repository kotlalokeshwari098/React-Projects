import React, { useEffect } from 'react'
import { indiaFestivals } from '../data'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FestivalsList from '../components/FestivalsList';

function StateFestivals() {
  const [statesData, setStateData] = useState([])
  const { stateName } = useParams();

  console.log(stateName)
  // console.log("Data state:", item.state.toLowerCase(), "| Param state:", stateName.toLowerCase());

  console.log(indiaFestivals.filter((item) => (item.state.toLowerCase().trim() === stateName.toLowerCase().trim()
  )))

  useEffect(() => {

    setStateData(() => (
      indiaFestivals.filter((item) => (item.state.toLowerCase() === stateName.toLowerCase()))
    ))


  }, [stateName])

 
    {
      statesData[0].length>0 &&
      <FestivalsList  festivals={statesData[0].festivals} />
    }
  //  console.log(festival)

  return (
    <div className='state-container'>
      {statesData.length > 0 ?
        <div className='state-data'>
          <div className="left-container">
            <div className="state-image">
              <img src={statesData[0].image} alt="" />
            </div>
          </div>
          <div className="right-container">
            <div className="state-name"><h3>{statesData[0].state}</h3></div>
            <h4>stateLocation : {statesData[0].stateLocation}</h4>
            <h2>Festivals</h2>
            {festival}
          </div>
        </div>
        :
        "loading..."}
    </div>
  )
}

export default StateFestivals
