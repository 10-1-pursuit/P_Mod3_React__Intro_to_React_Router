import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import cohortArray from "./data/cohortArray.json"


function App() {


  console.log("cohortArray: ", cohortArray)
  // const [v, f]

  const fellowsToRender = cohortArray.map( 
    (eachFellowObj)=>{  
      return(<div>
        <h4>Name: {eachFellowObj.name}</h4>
      </div>)  
    } 
  )


  // Handling Duplicate Months
  const filteredMonths = []
  
    cohortArray.forEach(  
      (eachFellowObject)=>{

        // June July October March
        if(eachFellowObject.birthdayMonth === "July"){
          filteredMonths.push("July")
        }
      } 
  )
  console.log("filteredMonths: ", filteredMonths)

  const monthstoRender = filteredMonths.map( (eachMonthString) => <h2>{eachMonthString}</h2>    )




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
          {monthstoRender}
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
