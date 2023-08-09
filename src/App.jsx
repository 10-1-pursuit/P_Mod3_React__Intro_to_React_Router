import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

// import cohortArray from "./data/cohortArray.json"
// This Retains ALL of the Fellows


//          📡 ⚛️ 🛰
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BirthdaysChart from './Components/BirthdaysChart'




function App() {


  return (
    <>
      <Router>


        {/* THIS IS YOUR NAV BAR */}
        <nav>

          <Link to="/" >
            <h3>Home</h3>
          </Link>

          <Link to="/birthdaysChart" >
            <h3>Cohort Birthdays Chart</h3>
          </Link>

          <Link to="/10_1" >
            <h3>10.1 Cohort</h3>
          </Link>

        </nav>        




        {/* THIS IS NOT - Your Nav Bar */}
        <Routes>

          <Route path='/' element={<h1>Home - Welcome :)</h1>}  />
          <Route path='/birthdaysChart' element={<BirthdaysChart />}  />
          <Route path='/10_1' element={<h1>THE LITTEST COHORT OF ALL TIME!</h1>}  />

        </Routes>



        <div id="logoz">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>



       



        <footer>10.1 ©</footer>
      </Router>
    </>
  )
}

export default App
