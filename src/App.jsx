import React from 'react'
import './App.css'
import { createBrowserRouter, useSearchParams } from 'react-router-dom'
import MainSection from './Components/MainSection'
import VideoContainer from './Components/VideoContainer'
import { RouterProvider } from 'react-router-dom';
import WatchPage from './Components/WatchPage'
import BodySection from './Components/BodySection'

// const[sum] = useSearchParams();
const appBrowser = createBrowserRouter([{
  path: "/",
  element: <MainSection />,
  children: [

    {
      path:"/",
      element:<BodySection/>
    },
    {
      path: "home",
      element: <BodySection/>

    },
      {
        path:"/watch",
        element:<WatchPage />
      },
    // {
    //     path:"/home/https://www.youtube.com/watch?v=id",
    //     element: <WatchPage/>

    // },
   
  ]
}])
function App() {


  return (

    <RouterProvider router={appBrowser}>



      <div>
        {/* 
    # head
    #body
    #sidebar
    #menuitems
    #mainconatiner
    #buttonlist
    #video-container
    #video-card
    */}

        <MainSection />


      </div>

    </RouterProvider>
  )
}

export default App
