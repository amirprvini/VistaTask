import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const LayOut: React.FC = (): JSX.Element => {
  return <div className='layOutWrapper flex h-full w-full bg-gray-100'>
        <SideBar/>
        <Outlet/>
    </div>
}

export default LayOut