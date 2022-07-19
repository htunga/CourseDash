import React from 'react'
import './RightSide.css'
import DashHeader from './DashHeader/DashHeader'
import DLA from './DLA/DLA'
import YourCourses from './YourCourses/YourCourses'

const RightSide = () => {
  return (
    <section className="Right-Side">
        <DashHeader/>
        <YourCourses/>
        <DLA/>
        </section>
  )
}

export default RightSide