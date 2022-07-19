import React from 'react'
import './LeftSide.css'
import Header from './Header/Header'
import MyCourse from './MyCourses/MyCourse'
import MyTutors from './MyTutors/MyTutors'



const LeftSide = () => {
  return (
    <aside className="Left-Side">
        <Header/>
        <MyCourse/>
        <MyTutors/>
    </aside>
  )
}

export default LeftSide