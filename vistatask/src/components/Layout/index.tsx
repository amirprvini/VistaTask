import React from 'react'
import Header from './SideBar'
import { Outlet } from 'react-router-dom'
import Container from '../Container'

const LayOut: React.FC = (): JSX.Element => {
  return <div className='layOutWrapper flex h-full w-full'>
        <Header/>
        <Container> <Outlet/> </Container>
    </div>
}

export default LayOut