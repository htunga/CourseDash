import React from 'react'
import './Header.css'
import cours from'../../Tunga Icons/logo.PNG'

const Header = () => {
  return (
    <div className='header'>
      <img id="icon1" src={cours} alt='' />
        <h1>Orizon Academy</h1>
        <i>Learning with fun</i>
    </div>
  )
}
export default Header