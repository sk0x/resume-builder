import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

const RootLayout = () => {
  return (
    <>
            <Navbar />
            <main className='h-full w-full'>
                <Outlet />
            </main>
            <Footer />
    </>
  )
}

export default RootLayout
