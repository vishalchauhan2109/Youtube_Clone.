import React from 'react'
import { BiSolidHome } from 'react-icons/bi'
import { GoPerson } from 'react-icons/go'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { RiDownloadLine } from 'react-icons/ri'
import { SiYoutubeshorts } from 'react-icons/si'
import { Link } from 'react-router-dom'

const SidebarFixed = () => {
    return (
        <div className='w-17 flex flex-col mt-5  items-center  space-y-8 '>
            <div>
                <Link to="/Home" >
                <BiSolidHome className='text-[22px]'/>
                <div className='text-[9px] text-gray-800'>Home</div>
                </Link>
            </div>
            <div className='flex flex-col items-center'>
                <SiYoutubeshorts className='text-[22px]' />
                <div className='text-[9px] text-gray-800 '>Shorts</div>
            </div>
            <div className='flex flex-col items-center'>
                <MdOutlineSubscriptions className='text-[22px]'/>
                <div className='text-[9px] text-gray-800'>Subscriptions</div>
            </div>
            <div className='flex flex-col items-center'>
                <GoPerson className='text-[22px] border-2 rounded-full'/>
                <div className='text-[9px] text-gray-800'>You</div>
            </div>

            <div className='flex flex-col items-center'>
                <RiDownloadLine  className='text-[22px]'/>
                <div className='text-[9px] text-gray-800'>Downloads</div>    
            </div>
        </div>
    )
}

export default SidebarFixed

