import React, { useState } from 'react'
import { GoPerson } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'
import { MdKeyboardVoice } from 'react-icons/md'
import { PiMagnifyingGlassThin } from 'react-icons/pi'
import { SlMenu } from 'react-icons/sl'
import { VscAdd } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import {toggleMenu} from '../utils/appSlice'
import Logo from '../utils/Logo'


const Header = ()=> {
  
  const[search,setSearch] = useState(false);

  const dispatch = useDispatch();  

  const toggleSideBar =()=>{
    dispatch(toggleMenu());
  }


  function onfocus(){
    setSearch(true)
  }   
  function onblur(){
    setSearch(false)
  } 
    
  return (
    <div className='p-6  w-full h-2 flex items-center bg-white  '>
      <div className='mr-6 cursor-pointe flex'>
        <SlMenu onClick={()=>toggleSideBar()} className='pointer h-5 ' />
            
      </div>

      <div className='w-[93px] flex relative'>
          <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" className='h-[53px]  min-w-[93px] ' alt="" />
          <sup className='text-gray-600 text-[10px] pt-6 '>IN</sup>
      </div>

      

      <div className="flex ml-30 h-9 relative">{
        search === false ? null:<PiMagnifyingGlassThin className='absolute left-3 mr-10 top-2 size-5' />}
        <input type="text" className='search  w-110  rounded-l-3xl border-1 border-gray-300 outline-0  pl-10' placeholder='Search' onFocus={onfocus} onBlur={onblur} />
        <button  ><PiMagnifyingGlassThin className=' w-15 p-1.5 h-9 rounded-r-3xl border-1 border-gray-300 ' /></button>
      </div>
      

      <div className='bg-gray-100 text-2xl p-1 ml-6 rounded-full'>
        <MdKeyboardVoice />
      </div >

      <div className='flex items-center w-full justify-between'>
        <div className='bg-gray-100 ml-18 w-29 pl-4  p-2 flex items-center rounded-3xl'>
          <VscAdd className='size-4  text-gray-800 mr-2' />
          <span className='ml-2 font-medium'>Create</span>
        </div>
        <div>
          <IoNotificationsOutline className='size-6' />
        </div>
        <div className='border-1 rounded-full '>
          <GoPerson  className='size-8 font-normal' />
        </div>

      </div>


    </div>
  )
}

export default Header
