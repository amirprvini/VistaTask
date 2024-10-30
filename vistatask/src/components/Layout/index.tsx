import React from 'react'
import Header from './SideBar'
import { Outlet } from 'react-router-dom'

const LayOut: React.FC = (): JSX.Element => {
  return <div className='layOutWrapper flex h-full w-full'>
        <Header/>
        <Outlet/>
    </div>
}

export default LayOut