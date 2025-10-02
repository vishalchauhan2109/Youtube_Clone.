import React from 'react'
import VideoContainer from './VideoContainer'
import SidebarFixed from './SidebarFixed'

const BodySection = () => {
    //side wale button ko remove krne kre liye we add that buttons and videocontainer section
    return (
        <div className='flex'>
            <div className=''>


                <SidebarFixed />

            </div>
            <div className=''>
                <VideoContainer  />
            </div>

        </div>
    )
}

export default BodySection
