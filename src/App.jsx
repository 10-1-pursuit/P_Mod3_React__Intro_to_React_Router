import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import cohortArray from "./data/cohortArray.json"
// This Retains ALL of the Fellows


//          📡 ⚛️ 🛰
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  console.log("cohortArray: ", cohortArray)


  const [currentFellowsArray, setCurrentFellowsArray] = useState( cohortArray )
  // currentFellowsArray = cohortArray

  const fellowsToRender = currentFellowsArray.map( 
    (eachFellowObj)=>{  
      return(<div>
        <h4>Name: {eachFellowObj.name}</h4>
      </div>)  
    } 
  )


  // Handling Duplicate Months
  // const filteredMonths = []
  
  //   cohortArray.forEach(  
  //     (eachFellowObject)=>{

  //       // June July October March
  //       if(eachFellowObject.birthdayMonth === "July"){
  //         filteredMonths.push("July")
  //       }
  //     } 
  // )
  // console.log("filteredMonths: ", filteredMonths)

  // const monthstoRender = filteredMonths.map( (eachMonthString) => <h2>{eachMonthString}</h2>    )
  
  const monthsRender = [
    ...new Set(cohortArray.map((fellow) => fellow.birthdayMonth)),
   ];  /// Brought to You By Mike K. ©
   console.log(monthsRender)

   const monthsInHTML = monthsRender.map( (eachMonthText)=>
      // still retaining Arrow Function implicit return  
      <h2 onClick={ (se) => handleMonthClick(se.target.innerText) }>
        {eachMonthText}
      </h2>
    )


    function handleMonthClick (clickedMonthText){
      console.log(clickedMonthText)

      // We are filtering from EVERYONE !!!!  ~  cohortArray (From JSON File)
      const filteredFellows = cohortArray.filter( (eachFellow)=> eachFellow.birthdayMonth === clickedMonthText )

      setCurrentFellowsArray( [...filteredFellows] )


    }



  return (
    <>
      <Router>


        {/* THIS IS YOUR NAV BAR */}
        <nav>

          <Link to="/" >
            <h3>Home</h3>
          </Link>

          <Link to="/sam" >
            <h3>Additional Welcome</h3>
          </Link>

          <Link to="/10_1" >
            <h3>10.1 Cohort</h3>
          </Link>
          
        </nav>        


        {/* THIS IS NOT - Your Nav Bar */}
        <Routes>

          <Route path='/' element={<h1>Hey :)</h1>}  />
          <Route path='/sam' element={<h1>WELCOME TO OUR APP!</h1>}  />
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
        <h1>Help With Click Filters</h1>


        <div className='for-two-colums'>

          <div className='birthday-month-list'>
            <h2>Birthday Months</h2>
            {monthsInHTML}
          </div>


          <div className='fellows'>
            <h2>Our Amazing/Lovely Fellows✨</h2>
            {fellowsToRender}
          </div>
          
        </div>


      </Router>
    </>
  )
}

export default App
