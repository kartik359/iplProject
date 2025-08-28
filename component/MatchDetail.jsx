import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Inpagenavigation from './Inpagenavigation'
import './kartik.css'


function MatchDetail() {
     async function fetchPlayer(id)
{
const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  setData(result);

} catch (error) {
	console.error(error);
}
}

 useEffect(()=>{
       fetchPlayer(id); 
    },[])
    const[data,setData]=useState({})
    let {id}=useParams()
   
    
  return (
    <>
        
      
      <Inpagenavigation team={[data.matchInfo?.team1?.shortName,data.matchInfo?.team2?.shortName]} name={data.matchInfo?.series?.name} >
        {data.matchInfo?.team1?.playerDetails?.map(data => (
            <div className='team1players'>
                <h3>{data.fullName}</h3>
                <p>{data.role}</p>
            </div>))}
         {data.matchInfo?.team2?.playerDetails?.map(data => (
            <div className='team2players'>
                <h3>{data.fullName}</h3>
                <p>{data.role}</p>
            </div>
        ))}
       
        </Inpagenavigation>
  
    </>
  )
}

export default MatchDetail
