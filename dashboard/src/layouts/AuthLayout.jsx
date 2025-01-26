import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='w-full h-screen bg-zinc-600'>
        <Outlet/>
    </div>
  )
}

export default AuthLayout