import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'

export default function States(props) {

    const [state, setstate] = useState([])

    useEffect ( ()=>{
   
           getCitiesData()
           
       }, []
       )
      
   
      let  getCitiesData = async ()=>{
   
           let  citiesData = await fetch ("https://services.brninfotech.com/tws/IndiaDetails2.php?type=states&quantity=100")
          
            let convertedData = await citiesData.json()
   
            setstate(convertedData)
           
      }        

      
    if(props.isLoggedIn===false)
    {
        return <Navigate to ="/"/>
        
    }
     
        
   
   
    return (
        <div className="states">

            {state.map((stateName) =>
         {
            return <h2>
             {stateName}</h2>
    }
       )
     }

            
    
        </div>
    )
}
