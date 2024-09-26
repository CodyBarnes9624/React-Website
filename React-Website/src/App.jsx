// import { useState } from 'react'
import './App.css'
import About from './Pages/About';
import Portfolio from '/Pages/Portfolio'
import PageNavbar from './Components/Navbar';
import {Route, Switch} from "react-router-dom";

function App() {

  return (
    <>
      <PageNavbar/>
      <Switch>
        <Route exact path='/#about' component={About}/>
        <Route exact path='/#portfolio' component={About}/>
      </Switch>
      <About/>
    </>
  )
}

export default App