import React from 'react'
import WatchPageAccordian from '../utils/WatchPageAccordian'
import {useSearchParams} from "react-router-dom";

const WatchPage = () => {

   const [num] = useSearchParams()
   console.log(num)
   const id= num.get("v")
   console.log(id)


  return (
    <div className=' flex   h-[90vh] min-w-[100vw] overflow-y-auto whitespace-nowrap scroll-smooth no-scrollbar'>

      {/* left side  */}

      <div className='w-[50%] h-90 '>
        <div className='ml-25 mt-7 w-full h-full  rounded-[10px] '><iframe className='w-full h-full rounded-2xl' src={`https://www.youtube.com/embed/${id}?si=6PrQhlTh8-lEmEBE`}title="YouTube video player"allow="accelerometer; autoplay; ; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></div>
        <div>
            <h1></h1>

        </div>
      </div>



      {/* right side  */}



      <div className='p-5 ml-35  mt-7 rounded-[10px] h-90 w-[30%]  bg-pink-300 '>
        <div className='mb-5'>

          <h2><strong>My Mix </strong></h2>
          <h6 className='text-gray-500 text-[12px]'>Mixes are playlists YouTube makes for you</h6>

        </div>

        <div>
          <div className="h-65  overflow-y-auto whitespace-nowrap scroll-smooth no-scrollbar">
            
            <WatchPageAccordian />
            
          </div>
        </div>

      </div>



    </div>
  )
}

export default WatchPage
