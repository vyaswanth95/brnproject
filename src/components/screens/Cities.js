import React ,{ useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'

export default function Cities(props) {



    const [city, setcity] = useState([])

    useEffect (()=>{

        getCitiesData()

    },[])

    let  getCitiesData = async ()=>{

        let  citiesData = await fetch ("https://services.brninfotech.com/tws/IndiaDetails2.php?type=cities&quantity=100")
       
         let convertedData = await citiesData.json()

         setcity(convertedData)
        
        
     }

     
    if(props.isLoggedIn===false)
    {
        return <Navigate to ="/"/>
        
    }
     
    return (

        <div className="citiez">
            
            {city.map((cityName) => {
            return  <h2>{cityName}</h2> 
            }
            )
}
        </div>
    )
}
