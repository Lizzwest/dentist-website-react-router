import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import Home from "./Home"
import Procedures from "./Procedures"
import Contact from "./Contact"
import WidgetShow from "./WidgetShow"
import OurTeam from "./OurTeam"
import Specials from "./Specials"
import Invisalign from "./Invisalign"



function App() {
  const procedures = [
    "Deep Cleaning", 
    "Braces Consultation", 
    "Oral Surgery",
     "Root Canal Referral",
     "Family Dentistry", 
     "Fillings"
  ]
  const specials =[
    "New Patient Referral 20% off",
    "Sibling discount 15% off",
    "Two-for-Tuesdays, buy one filling, get one free",
    "Invisalign 30% off when you sign up for service the same day"
  ]
  return (
    <Router>
<div className="App">
  <nav>
    <Link to="/">Go Back To Home</Link>{"  "}
    <Link to="/procedures">See our procedures</Link>{"  "}
    <Link to="/ourTeam">Our Team</Link>{"  "}
    <Link to="/specials">Specials</Link>{"  "}
    <Link to="/invisalign">Invisalign</Link>{"  "}
    <Link to="/contact">Contact us</Link><br />
  </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/procedures" render={() => <Procedures procedures={procedures} />}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/widgets/:id" render={(props)=> <WidgetShow procedures={procedures}{...props}/>}/>
      <Route path="/ourTeam" component={OurTeam}/>
      <Route path="/specials" render={() => <Specials specials={specials} />}/>
      <Route path="/invisalign" component={Invisalign}/>
    </div>
    </Router>
    
  );
}

export default App;
