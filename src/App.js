import React from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// This goes with the Wrapper

// import Airsoft from "./pages/Airsoft";
 import Contact from "./pages/Contact";
=======
import Airsoft from "./pages/Airsoft";
// import Contact from "./pages/Contact";
// import Create from "./pages/Create";
import Homepage from "./pages/Homepage";
// import Paintball from "./pages/Paintball";
import Profile from "./pages/Profile";
import Event from "./pages/Event";

// IMPORTANT !! We need these components here or the login wont work correctly. 
import LoginButton from "./components/Signup"
import LogoutButton from "./components/LogoutButton"
// DONT DELETE!!

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
   <div>
     <Navbar />
     < LoginButton />
    < LogoutButton />
       {/* <Wrapper> */}
        {/* 
        <Route exact path="/Create" component={Create} />
         
         <Route exact path="/Paintball" component={Paintball} />

  <Route exact path="/Airsoft" component={Airsoft} />*/ }
          <Route exact path="/Contact" component={Contact} /> 

         
          <Route exact path="/Contact" component={Contact} />  */}

        <Route exact path="/" component={Homepage} />
        <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/Airsoft" component={Airsoft} />
           <Route exact path="/Profile" component={Profile} />


        <Route exact path="/Event" component={Event} />
      {/* </Wrapper> */}
      <Footer />
      </div>
    </Router>
  
  );
}


export default App;
