import React from 'react'
import './Deatailes.css'
export const Deatailes = () => {
  return (
    <div className='detailes'>
      <form action="">
        <div className="sec first">
          <label htmlFor="city">Live In</label>
          <input type="text" id='city' placeholder='SwitzerLand' />
          <label htmlFor="street">Street Address</label>
          <input type="text" id='street' placeholder='2559 Crosswind Drive' />
        </div>
        <div className="sec second">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="" id="email" placeholder='www.google.com' />
        </div>
        <div className="sec third">
            <label htmlFor="birth">Date of Birth</label>
        <input type="date" name="" id="birth" />
          <label htmlFor="gen">Gender</label>
          <select name="Gender" id="" >
            <option value="">male</option>
            <option value="">female</option>
            <option value="">unKnown</option>
          </select>
          </div>
      </form>
    </div>
  )
}
