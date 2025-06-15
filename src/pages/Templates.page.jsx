import React, { useState } from 'react'
import { TemplateData } from '../constants'
import { IoIosSearch } from "react-icons/io";

const TemplatesPage = () => {
    const [currPage, setCurrpage] = useState(1)
    const itemsPerPage = 12
    const data = TemplateData.tmeplates
    const totalPage = Math.ceil(data.length / itemsPerPage)

    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex)

    const handlePreviousPage = () => currPage > 1 && setCurrpage(currPage - 1)
    const handleNextPage = () => currPage < totalPage && setCurrpage(currPage + 1)
    const handlePage = (page) => setCurrpage(page)

  return (
        <div className='w-full max-w-7xl mx-auto px-8 py-8'>
            <div className='flex items-center justify-center flex-col my-8 gap-8 w-full'>
                <div className='text-center space-y-2'>
                    <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold'>
                        {TemplateData.heading}
                    </h2>
                    <span className='lg:text-lg text-neutral-500'>
                        {TemplateData.supportText}
                    </span>
                </div>
                <div className='w-full max-w-3xl mx-auto flex'>
                    <input className='border text-xl border-gray-300 focus:outline-none focus:border-gray-500 w-full px-2 py-2 rounded-l-lg h-12'/>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-r-xl h-12'>
                        <IoIosSearch className='w-7 h-7'/>
                    </button>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 px-4 py-4 place-items-center'>
                {currentItems.map((template) => (
                    <div className='' key={template.name}>
                        {template.name}
                    </div>
                ))}
            </div>
            <div className=''>
                <div>
                    {Array.from({length: totalPage}, (_, index) => (
                        <span className={currPage - 1 === index ? "text-red-800" : "text-black"} onClick={() => handlePage(index+1)}>
                            {index + 1}
                        </span>
                    ))}
                </div>
                <button onClick={handlePreviousPage}>
                    Prev
                </button>
                <button onClick={handleNextPage}>
                    Next
                </button>
            </div>
        </div>
  )
}

export default TemplatesPage
