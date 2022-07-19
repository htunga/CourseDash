import React from 'react'
import './MyCourse.css'
import course from '../../Tunga Icons/Mycourses.svg'
import cours from '../../Tunga Icons/Bookmark2.svg'
import cour from '../../Tunga Icons/Trending.svg'
import cou from '../../Tunga Icons/Article.svg'
import co from '../../Tunga Icons/Completecourse.svg'
const MyCourse = () => {
  return (
    <div className='mycourse'>
        <ul>
        <p><img id="icon" src={course} alt=''/> My Courses</p>
          <p><img id="icon" src={cours} alt='' />Bookmarks</p>
          <p><img id="icon" src={cour} alt='' />Trending Courses</p>
          <p><img id="icon" src={cou} alt='' />Help Articles</p>
          <p><img id="icon" src={co} alt='' />Completed Courses</p>
        </ul>
    </div>
  )
}

export default MyCourse