import React from 'react'

function FestivalsList({festivals}) {
    
  return (
    <div>
       {festivals.map((item) =>
        <Link
          to={`./${item.name}`}>
          <div key={item.id}>{item.name}</div>
        </Link>)
        }
    </div>
  )
}

export default FestivalsList
