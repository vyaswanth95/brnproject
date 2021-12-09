
import './App.css';
import {BrowserRouter,Routes,Route,Link , NavLink} from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';
import Login from './components/screens/Login';
import Cities from './components/screens/Cities';
import States from './components/screens/States';
import Movies from './components/screens/Movies';
import Quotes from './components/screens/Quotes';
import Actors from './components/screens/Actors';

import {useState} from 'react'
function App(props) {

  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <BrowserRouter>

        <nav className="meauto">

<h1>Pulse.BRN</h1>

       <NavLink to="/" style={(obj)=>{
                    let linkcolor;
                if (obj.isActive === true)
                    {linkcolor = "grey";}
                    else{linkcolor=null;}
                  return {color: linkcolor}
                  }}
                  >LOGIN</NavLink>
      <NavLink  to='cities' style={(obj)=>{
                    let linkcolor;
                if (obj.isActive === true)
                    {linkcolor = "grey";}
                    else{linkcolor=null;}
                  return {color: linkcolor}
                  }}>CITIES</NavLink>
      <NavLink to='states' style={(obj)=>{
                    let linkcolor;
                if (obj.isActive === true)
                    {linkcolor = "grey";}
                    else{linkcolor=null;}
                  return {color: linkcolor}
                  }}>STATES</NavLink>
      <NavLink to='actors' style={(obj)=>{
                    let linkcolor;
                if (obj.isActive === true)
                    {linkcolor = "grey";}
                    else{linkcolor=null;}
                  return {color: linkcolor}
                  }}>ACTORS</NavLink>
      <NavLink to='movies' style={(obj)=>{
                    let linkcolor;
                if (obj.isActive === true)
                    {linkcolor = "grey";}
                    else{linkcolor=null;}
                  return {color: linkcolor}
                  }}>MOVIES</NavLink>
      <NavLink to='quotes' style={(obj)=>{
                    let linkcolor;
                if (obj.isActive === true)
                    {linkcolor = "grey";}
                    else{linkcolor=null;}
                  return {color: linkcolor}
                  }}>QUOTES</NavLink> 
       </nav>

        
      
     
  

      <Routes>
          <Route path="/" element={<Login changedLoginStatus={setisLoggedIn}/>}/> 
             <Route path="cities" element={<Cities isLoggedIn={isLoggedIn}/>}/>     
             <Route path="states" element={<States isLoggedIn={isLoggedIn}/>}/>     
             <Route path="actors" element={<Actors isLoggedIn={isLoggedIn}/>}/>     
             <Route path="movies" element={<Movies isLoggedIn={isLoggedIn}/>}/>     
             <Route path="quotes" element={<Quotes isLoggedIn={isLoggedIn}/>}/>     

      </Routes>
    </BrowserRouter>
  );
}

export default App;
