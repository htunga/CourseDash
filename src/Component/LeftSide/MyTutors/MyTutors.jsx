import React from 'react'
import './MyTutors.css'
import course from '../../Profile/pc1.jpg'
import cours from '../../Profile/pc2.jpg'
import cour from '../../Profile/pc3.jpg'
import c from '../../Tunga Icons/Message.svg'
function MyTutors () {
  return (
    <div className='mytutors'>
      <p><b>My Tutors</b></p>
      <ul>
        <p>
          <img id="icon2" src={course} alt=''/>
           Tunga Huguette
           <i> PHP Developer</i>
           <img id="icon3" src={c} alt=''/>
           </p>
          <p>
            <img id="icon2" src={cours} alt='' />
            Annette Black
            <i> Python Developer</i>
            <img id="icon3" src={c} alt=''/>
            </p>
          <p>
            <img id="icon2" src={cour} alt='' />
            Eleanor Pena
            <i> UI Designer</i>
            <img id="icon3" src={c} alt=''/>
            </p>
        </ul>
        
    </div>
  )
}

export default MyTutors;