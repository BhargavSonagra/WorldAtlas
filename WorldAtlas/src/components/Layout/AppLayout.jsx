import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../UI/Headers'
import Footers from '../UI/Footers'

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  )
}

export default AppLayout
