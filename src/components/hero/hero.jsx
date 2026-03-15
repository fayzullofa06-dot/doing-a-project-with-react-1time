import React from 'react'
import './hero.css' 
import Book from '../book/Book'
import heroImg from '../../assets/hero.jpg'
export default function Hero() {
  return (
    <>
    <div className='section'>
          <div className='hero-section'>
           <p className='hero-text'>Start your unforgettable  <br />journey with us</p> 
           <p className='hero-travel'>The best travel for your jouney begins now</p>
          </div>
          <Book />
    </div>
  
    
    </>
  )
}
