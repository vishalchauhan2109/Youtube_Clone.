import React from 'react'
import Button from '../Common/Button'

const list = ["All", "Music", "Mixes", "WebDevlopment", "DataStructure", "Live", "music", "News", "Tmkoc", "Jethalal", "Tseries", "KishorKumar","Reactjs","Redux", "Music", "Mixes", "WebDevlopment", "DataStructure", "Live", "music", "News", "Tmkoc", "Jethalal", "Tseries", "Kishor Kumar","Reactjs","Redux","Music", "Mixes", "WebDevlopment", "DataStructure", "Live", "music", "News", "Tmkoc", "Jethalal", "Tseries", "Kishor Kumar","Reactjs","Redux", "Music", "Mixes", "WebDevlopment", "DataStructure", "Live", "music", "News", "Tmkoc", "Jethalal", "Tseries", "Kishor Kumar","Reactjs","Redux"]

const ButtonSection = () => {
    return (
        <div className='flex w-[92vw] overflow-y-hidden whitespace-nowrap scroll-smooth no-scrollbar '>

            {
                list.map((items, index) =>

                    <Button key={index}  name={items} />

                )

            }



        </div>
    )
}

export default ButtonSection
