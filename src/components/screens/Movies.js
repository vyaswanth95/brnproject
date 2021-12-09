import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import { Navigate } from 'react-router-dom'

export default function Movies(props) {

    const [moviesData, setmoviesData] = useState([]) 

    useEffect(()=>{
             
       getMoviedeatiles()
       
    },[])

    let getMoviedeatiles = async ()=>{

         let movies = await fetch ("https://services.brninfotech.com/tws/MovieDetails2.php?mediaType=movies")

         let covertedData = await movies.json() 

         setmoviesData(covertedData)
    }

          
    if(props.isLoggedIn===false)
    {
        return <Navigate to ="/"/>
        
    }
     
    

    return (
        <div  className="mov">{moviesData.map((movieobj)=>{

            return <MovieCard  title = {movieobj.title} poster = {movieobj.posters[0]}/>
        })}
           
            
        </div>
    )
}
