import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiSolidHome } from 'react-icons/bi'
import { CiFlag1 } from 'react-icons/ci'
import { IoHelpCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import { MdHistory, MdKeyboardArrowRight, MdOutlineSubscriptions, MdOutlineWatchLater, MdPlaylistPlay, MdSettings, MdSettingsRemote } from 'react-icons/md'
import { RiDownloadLine, RiFeedbackLine } from 'react-icons/ri'
import { SiYoutubeshorts } from 'react-icons/si'
import { SlMenu } from 'react-icons/sl'
import { toggleMenu } from '../utils/AppSlice'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../utils/Logo'
import { Link } from 'react-router-dom'
// import Store from '../utils/Store'

const SidebarMoving = () => {

    const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen)
    const dispatch = useDispatch();

    const toggleSideBar = () => {
        dispatch(toggleMenu());
    }

    if (isMenuOpen) {
        return null;
    }
    return (
        <div className='text-[14px]  text-gray-800 shadow-black  '>


            <div className='w-[210px] flex flex-col items-center  h-[100vh]  absolute top-0  bg-white   overflow-y-auto  overflow-x-none whitespace-nowrap scroll-smooth no-scrollbar'>


                {/* 1. logo on top Div */}
                <div className='flex fixed items-center justify-center bg-white w-[100%]'>
                    <div className=' cursor-pointer'>
                        <SlMenu  onClick={() => toggleSideBar()} className='pointer h-5 text-black ' />
                    </div>
                    <Logo />
                </div>

                <hr className='text-black' />

                {/* 2. home shorts  and Subscriptions Div */}
                <div className='pr-8 pl-8  pt-20 pb-8 space-y-3 '>
                    
                    <div >
                        <Link to="/Home" className='flex space-x-7'>
                        <BiSolidHome className='text-xl' />
                        <p>Home</p>
                        </Link>
                    </div>
                    

                    <div className='flex space-x-7'>
                        <SiYoutubeshorts className='text-xl' />
                        <p>Shorts</p>
                    </div>

                    <div className='flex space-x-7'>
                        <MdOutlineSubscriptions className='text-xl' />
                        <p>Subscriptions</p>
                    </div>

                </div>

                <hr className='  text-gray-500  ' />


                {/* 3.   You section  Div */}
                <div className='pr-10 pl-10  pt-8 pb-8 space-y-3 '>
                    <div className='flex items-center'><strong>You </strong><MdKeyboardArrowRight className='ml-5 size-6' /></div>
                    <div className='flex space-x-7'>
                        <MdHistory className='text-xl' />
                        <p>History</p>
                    </div>

                    <div className='flex space-x-7'>
                        <MdPlaylistPlay className='text-xl' />
                        <p>Playlists</p>
                    </div>

                    <div className='flex space-x-7'>
                        <MdOutlineWatchLater
                            className='text-xl' />
                        <p><span>Watch Later</span></p>
                    </div>

                    <div className='flex space-x-7'>
                        <AiOutlineLike
                            className='text-xl' />
                        <p><span>Liked Videos</span></p>
                    </div>

                    <div className='flex space-x-7'>
                        <RiDownloadLine
                            className='text-xl' />
                        <p><span>Downloads</span></p>
                    </div>

                </div>
                <hr className=' text-gray-500  w-[80%]' />



                {/* 4. Subscriptions section  Div */}
                <div className='pr-10 pl-10  pt-8 pb-8 space-y-4 '>
                    <div className='flex space-x-7'>
                        <IoSettingsOutline className='text-xl' />
                        <p>History</p>
                    </div>

                    <div className='flex space-x-7'>
                        <CiFlag1 className='text-xl' />
                        <p>Playlists</p>
                    </div>

                    <div className='flex space-x-7'>
                        <IoHelpCircleOutline
                            className='text-xl' />
                        <p><span>Watch Later</span></p>
                    </div>

                    <div className='flex space-x-7'>
                        <RiFeedbackLine
                            className='text-xl' />
                        <p><span>Liked Videos</span></p>
                    </div>


                </div>

                <hr className=' text-gray-500  ' />

                <div className='  pl-2 pr-2  pt-8 pb-8 space-y-5 '>
                    <p className='text-[12px]'>About Press Copyright Contact <br /> us Creator Advertise Developers  </p>

                    <p className='text-[12px]'>TermsPrivacyPolicy & SafetyHow <br />YouTube worksTest new features</p>

                    <p className='text-[10px]'>© 2025 Google LLC</p>

                </div>





            </div>

        </div>
    )
}

export default SidebarMoving;
