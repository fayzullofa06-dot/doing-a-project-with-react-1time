import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/hero.png';


export default function Header() {
  const [active, setActive] = useState('travel');
  const navbar = ['Home', 'Explore', 'Travel', 'Blog', 'Pricing'];

  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo"/>
    
      </div>

 <ul className='nav-links'>
  {navbar.map((item) => (
    <li
      key={item}
      onClick={() => setActive(item)} 
      className={active === item ? 'active' : ''}
    >
      {item}
    </li>
  ))}
</ul>

      <div className='btns'>
        <button className='Log-btn'>Login</button>
        <button className='Sign-btn'>Sign up</button>
      </div>
    </header>
  );
}

