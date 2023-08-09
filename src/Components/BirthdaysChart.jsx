import cohortArray from "../data/cohortArray.json"


import { useState } from "react"




const BirthdaysChart =( props )=>{
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




    return(<div>
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
    </div>)
}

export default BirthdaysChart