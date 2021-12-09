import React,{useRef, useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
export default function Login(props) {

    const [profileDetails, setprofileDetails] = useState([])

    let userNameRef = useRef (null)
    let passwordRef = useRef(null)

    let validateDetails = async ()=>{

        let dataToSend = new FormData()

        dataToSend.append("registeredEmail" , userNameRef.current.value)
        dataToSend.append("registeredPassword" , passwordRef.current.value)
        dataToSend.append("funcName" ,"verifyLogin")

        let requestOptions = {

           method : "post" ,
           body : dataToSend
    }

    let serverData  = await fetch ("https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php",requestOptions)

    let convertData = await serverData.json()

    setprofileDetails (convertData)



let otherPages = convertData.loggedIn ==="yes"?alert("LoginSuccessful"):alert(convertData.msg);

props.changedLoginStatus(otherPages)

    }


    return (
        
            
            <div className="mainConatiner"  >

<div className="loginConatiner" >

    <Form>
             
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>

    <Col sm="12">
    <Form.Control style={{width:'280px'}} type="email" ref={userNameRef} placeholder="Enter email" />
    </Col>
    <Form.Text className="text-muted">
    
     </Form.Text>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control style={{width:'280px'}} type="password" ref={passwordRef} placeholder="Enter Password" />
    
      </Form.Group>
  
      <Button variant="primary"  onClick={validateDetails}>
         Login
      </Button>


    </Form>

</div>

<div className = "detailsContainer">

<div>
    <img src={"https://pulse.brninfotech.com/pulse/modules/admin/" + profileDetails.profileImagePath} alt=""></img>
    </div>

</div>

        </div>
    )
}
