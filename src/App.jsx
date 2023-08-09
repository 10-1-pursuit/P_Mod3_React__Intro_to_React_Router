import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import cohortArray from "./data/cohortArray.json"
// This Retains ALL of the Fellows


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


    </>
  )
}

export default App
