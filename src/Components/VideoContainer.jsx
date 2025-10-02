import React, { useEffect, useState } from 'react'
import { API_LINK } from '../Common/Constant'
import Video from '../Common/Video'
import ButtonSection from './ButtonSection'
import { Link, useNavigate } from 'react-router-dom'

const VideoContainer = () => {

    const [apiResult, setApiResult] = useState([])

    useEffect(() => {

        getvideos();

    }, [])

    const getvideos = async () => {
        const data = await fetch(API_LINK)
        const json = await data.json()
        console.log(json.items)
        setApiResult(json?.items)
        // console.log(apiResult)
    }

    // const navigate = useNavigate();

    return (
        <div>
            <ButtonSection />
            <div className=' flex  justify-between  flex-wrap m-5 h-[72vh]  overflow-y-auto whitespace-nowrap scroll-smooth no-scrollbar'>

                {
                    apiResult.map((item) => {
                        return (
                            <Link key={item.id} to={"/watch?v="+ item.id} >   
                                <Video item={item}/>
                            </Link>
                        )

                    }

                    )

                }



            </div>
        </div>
    )
}

export default VideoContainer
