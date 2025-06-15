import React from 'react'
import { FooterData } from '../../constants'
import { Link } from 'react-router-dom'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-full w-full bg-stone-100 pt-16 mt-96'>
        <div className='max-w-7xl w-full mx-auto relative h-full'>
                <div className='relative w-full h-full'>
                    <div className='absolute -bottom-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 py-4'>
                        <div className='w-full h-full px-8 pt-10 flex lg:flex-row flex-col items-center justify-between gap-10'>
                            <div className='w-full sm:w-[24rem] relative flex items-center justify-center'>
                                <img src="footer_img.png" className='w-[20rem] size-48 object-contain'/>
                                <div className='h-full xs:h-[22rem] w-full bg-yellow-400 rounded-3xl rotate-12 -z-1 absolute -top-[10%] '>
                                </div>
                                <div className='h-full xs:h-[22rem] w-full bg-blue-400 rounded-3xl -rotate-12 -z-2 absolute -top-[10%]'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-8 py-8'>
                    <div className='flex flex-col items-start justify-start gap-4 px-10'>
                        <div className='text-xl tracking-wider uppercase text-pretty leading-relaxed'>
                            {FooterData.logo.text}
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            {FooterData.socials.map(({url, name, icon:Icon}) => (
                                <Link to={url} className=''>
                                    <Icon className='w-6 h-6 hover:text-neutral-500'/>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 space-y-10 mt-16 md:mt-0 px-8'>
                        {FooterData.category.map((cat) => (
                            <div className='flex flex-col items-start justify-start gap-2'>
                                <div className='flex flex-col gap-2'>
                                    {cat.links.map((link) => (
                                        <Link to={link.url} className='text-neutral-800 text-sm hover:underline hover:underline-offset-2'>{link.name}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-stone-200'>
                <div className='h-12 max-w-7xl w-full mx-auto flex flex-col items-center justify-between sm:flex-row text-xs tracking-wide text-neutral-600'>
                    <div className='flex items-center justify-center gap-1'>
                        <FaRegCopyright/>
                        2025 All right reserved
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
