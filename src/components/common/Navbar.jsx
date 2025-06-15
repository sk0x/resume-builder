import React from 'react'
import { NavbarData } from '../../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='w-full bg-white border-b border-gray-200'>
            <div className='max-w-7xl mx-auto w-full px-6 py-6'>
                <div className='flex items-center justify-between h-12'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={NavbarData.logo.img} alt="" className='h-14'/>
                        <span className='text-xl' >{NavbarData.logo.text}</span>
                    </div>
                    <div className='lg:flex hidden items-center justify-center gap-8'>
                        {NavbarData.main.map((link) => (
                            <Link to={link.url} className='capitalize text-lg hover:underline'>{link.name}</Link>
                        ))}
                    </div>
                    <div className='sm:flex hidden items-center justify-center gap-5'>
                        <Link to="/login">
                            <button  className="px-4 py-3 bg-neutral-300 rounded cursor-pointer">
                                Login
                            </button>
                        </Link>
                        <Link to="/resume/create">
                        <button className="px-4 py-3 bg-blue-700 text-white rounded cursor-pointer">
                                Create Your CV
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
