import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'

export default function Quotes(props) {

    const [quotesdata, setquotesdata] = useState([])
          
   

      let quotesDeatiles = async () => {

        
    let dataToSend = new FormData()

    dataToSend.append("type" , "quotes")
    dataToSend.append("quantity" , 10)


        let requestOptions = {

            method : "post" ,
            body : dataToSend
        }
    
   let serverData  = await  fetch ("https://services.brninfotech.com/tws/Quotes.php?" , requestOptions)
    let convertedData = await serverData.json()

    setquotesdata(convertedData)

    }
     

useEffect ( ()=> {

         
    quotesDeatiles()

} ,[])


if(props.isLoggedIn===false)
    {
        return <Navigate to ="/"/>
        
    }
     
  
    return (
        <div>
             <h1 className="citiGroup">{quotesdata}</h1>
        </div>
    )
}
