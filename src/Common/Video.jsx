import React from 'react'

const Video = ({ item 
    
}) => {
    return (
        <div className='mt-4 w-[25vw] m-4 h-auto flex-wrap wrap-break-word shadow-amber-900     '>

            <div className=' w-[305px] h-[35vh]   rounded-[15px]  bg-gray-700'>
                <img className='w-[100%] h-[100%] rounded-[10px]' src={item?.snippet?.thumbnails?.standard.url} alt="" />
            </div>

            <div className='flex mt-3 '>

                <div className='ml-5 max-w-[100%]'>
                    <div>
                        <h4 className='text-[14px]  flex required:min-w-200 max-h-50 flex-wrap '>{item.snippet.title}</h4>
                    </div>
                    <div>
                        <p className='text-[14px] text-gray-600'>{item.snippet.channelTitle}</p>
                    </div>
                    <div className='flex '>
                        <p className='mr-5 text-[14px] text-gray-600'>{
                        (item.statistics.viewCount/1000) < 1000 ? `${(item.statistics.viewCount/1000)} k ` : `${(item.statistics.viewCount/1000000).toFixed(1)}M`}Views</p>
                        <p className='text-[14px] text-gray-600'>* {((new Date()-new Date(item.snippet.publishedAt))/(1000*60*60)).toFixed() < 48 ? (((new Date()-new Date(item.snippet.publishedAt))/(1000*60*60)).toFixed() + " hours ago" ) :((new Date()-new Date(item.snippet.publishedAt))/(1000*60*60*24)).toFixed() + " days ago" }</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Video
