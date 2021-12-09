import React,{useState, useEffect} from 'react'
import ActorCards from './ActorCards'
import { Navigate } from 'react-router'

export default function Movies(props) {

const [moviesData, setmoviesData] = useState([])

useEffect(()=>{

    getMovieDetails()
},[])

 let getMovieDetails = async ()=>{

    let movies = await fetch ("https://services.brninfotech.com/tws/MovieDetails2.php?mediaType=movies")

          let convertedData = await movies.json() 

          setmoviesData(convertedData)
 
 }
          if(props.isLoggedIn===false)
          {
              return <Navigate to ="/"/>
              
          }
           
 
    return (
        <div className="act">
            {moviesData.map((movieobj)=>{
             return <ActorCards actor = {movieobj.actors } />
})}
        </div>
    )
}
