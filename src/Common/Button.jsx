import React from 'react'

const Button = ({name}) => {
  return (
    
    <div className='flex items-center justify-center cursor-pointer rounded-[5px] h-8 w-full pl-2 pt-1 pr-2 pb-1 mt-4 text-[13px] ml-3 mr-3 inline-flex bg-gray-200'>{name}</div>
  )
}

export default Button
