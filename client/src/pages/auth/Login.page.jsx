import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";


const LoginPage = () => {
  return (
        <div className='flex items-center justify-center h-full w-full min-h-screen'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-3 px-8 py-8 w-full place-content-center'>
                <div className='h-full w-full bg-gray-200 md:block hidden'>
                </div>
                <div className='flex flex-col justify-center md:items-start items-center w-full'>
                    <Link to="/" className='flex items-center justify-center text-sm text-gray-700 rounded-full px-2 py-2 hover:text-neutral-800 hover:underline mb-6'>
                        <IoIosArrowRoundBack className='w-6 h-6'/> Back to home
                    </Link>
                    <div className='mb-3 bg-red-500 w-16 h-16 rounded-3xl'>
                    </div>
                    <div className='flex flex-col items-center md:items-start justify-center gap-3'>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold'>
                            Welcome
                        </h3>
                        <h4 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extralight'>
                            Login to ResBuilder
                        </h4>
                    </div>
                    { /* form */ }
                    <div className='flex flex-col items-center justify-center my-8 gap-y-5 w-full max-w-md'>
                        <div className='flex flex-col items-start justify-center w-full'>
                            <lable className="text-xs md:text-sm lg:text-md text-neutral-500 capitalize tracking-loose leading-tight">Email</lable>
                            <input className='w-full px-2 py-1 border border-gray-400 rounded text-lg focus:outline-blue-500 focus:outline-1 focus:outline-offset-1'
                                type="email" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-full relative'>
                            <lable className="text-xs md:text-sm lg:text-md text-neutral-500 capitalize tracking-loose leading-tight">password</lable>
                            <input className='w-full px-2 py-1 border border-gray-400 rounded text-lg focus:outline-blue-500 focus:outline-1 focus:outline-offset-1'
                                type='password' id="password"/>
                            <span className="absolute right-2 bottom-2" onclick="togglePasswordVisibility()">
                                <FaRegEye/>
                            </span>
                        </div>
                        <button className="bg-blue-700 text-white rounded w-full px-3 py-2 cursor-pointer hover:bg-blue-500">
                            Login
                        </button>
                    </div>
                    <div className='text-neutral-600 tracking-loose'>
                        Don't have an account? <Link to='/sign-up' className="text-blue-500 hover:underline hover:underline-offset-1">Sign Up</Link> Now.
                    </div>
                    <div className='md:max-w-md w-full flex items-center justify-center'>
                        <div className='my-5 text-xs text-gray-400 leading-tight tracking-wider w-full flex items-center justify-center md:max-w-sm gap-1'>
                            <span className='h-[1px] w-full bg-gray-300'></span>
                            <span className='inline-flex text-center w-full justify-center items-center'>or connect using</span>
                            <span className='h-[1px] w-full bg-gray-300'></span>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-around w-full gap-8 max-w-md mt-4'>
                        <button className="border-red-400 border-1 text-red-500 hover:text-white rounded w-full px-3 py-2 cursor-pointer hover:bg-red-500">
                            Google
                        </button>
                        <button className="border-neutral-800 border-1 text-neutral-800 hover:text-white rounded w-full px-3 py-2 cursor-pointer hover:bg-neutral-900">
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
