import React from 'react'
import SidebarFixed from './SidebarFixed'
import SidebarMoving from './SidebarMoving'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import BodySection from './BodySection'

const MainSection = () => {
  return (
    <div>

      <Header />

      <div className='flex'>
        <SidebarMoving />

        <Outlet/>

      </div>


    </div>
  )
}

export default MainSection
