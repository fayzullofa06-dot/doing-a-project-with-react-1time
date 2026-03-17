import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
 import { FaChevronUp,FaChevronDown } from 'react-icons/fa';
import './Book.css' 
export default function Book() {
  const [country, setCountry] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState('')
  const [date, setDate] = useState('')
  const [delayedFlights, setDelayedFlights] = useState('')
  const [dots, setDots] = useState('')
  
  const dotso=['.','.','.','.','.']
  
  return (
    <div className='book-container'>
      <div className='booking-part'>
        <div className='fields'>
          <p className='Coutry-p'>Country</p>
<select name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
        </div>
<div className='fields'>
          <p className='Number-p'>Number of People</p>
        <select name="numbers-people" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}>
          <option value="">Choose number of people</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
</div>
<div className='fields'>
          <p className='Date-p'>Date</p>
        <select name="dates" value={date} onChange={(e)=>setDate(e.target.value)}>
          <option value="">Select a date</option>
          <option value="2024-07-01">July 1, 2024</option>
          <option value="2024-08-01">August 1, 2024</option>
          <option value="2024-09-01">September 1, 2024</option>
        </select>
          </div>
    
          <div className='fields'>
          <div className='Delayed'>Delayed</div>
           <select name="delayed-flights" value={delayedFlights} onChange={(e) => setDelayedFlights(e.target.value)}>
          <option value="">Select delayed flights</option>
          <option value="yes">Yes</option> 
          <option value="no">No</option>
        </select>
      </div>
        <button className='Booking-btn' > <span className='btn-text'>Book now</span> <FaArrowRight className='arrow-icon'/></button> 
          <div className='dots'>
            {dotso.map((dot,index)=>(
              
              <span key={index} className={`dot ${dots===index ? 'active' : ''}`} onClick={()=>setDots(indexnpm )}>{dot}</span>
            ))}
            <div className='arrows'>
<FaChevronUp className='arrow-up'/>
<FaChevronDown className='arrow-down'/>
            </div>

        </div>

      </div> 
    </div>

  )
}
