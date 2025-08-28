import React, { useState } from 'react'
import './inpagenavigation.css'
function Inpagenavigation({team,children,name}) {
    const[index,setIndex]=useState(0);
  return (
    <>
    
    <div className="leauge">{name}</div>
    <div className="heading">{team[0]} VS {team[1]}</div>
    <div className='trump'>
         <div className='btnDiv'>
        {
         
        
      team.map((data,i)=> (
        <>
        <button className="teamBtn" onClick={()=>setIndex(i)}> {data}</button>
      
        {/* <h3 className='heading'>{team} 'S SQUAD</h3> */}
        </>
      ))
       }
       </div>
   
      <h3 className='players'>{children[index]}</h3>
    
    </div>
   
    </>
  )
}

export default Inpagenavigation
