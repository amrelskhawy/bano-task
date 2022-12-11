import React from 'react'
import { BiErrorCircle,BiLike } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { RECOMMENDED } from '../../assets/data'


const Recommended = () => {
    return (
        <div className='hidden sticky top-4 w-full my-4 max-w-[300px] h-fit ml-12 xs:flex flex-col gap-8'>
            <div className='flex items-center gap-2 border-b-2'>
                <GrLocation />
                <input type='text' placeholder='Enter your location'
                    className='w-full border-none outline-none p-2 px-0'
                />
            </div>
            <p className='text-left text-[16px] leading-5 opacity-50 gap-1 flex '><BiErrorCircle className='text-3xl relative -top-1' />Your location will help us serve better and extend a personalised experience.</p>
            <div className='flex flex-col gap-4 mt-12'>
                <h3 className=' flex  items-center gap-1 uppercase text-[16px] text-left font-medium'><BiLike />REcommended Groups</h3>
                {
                    RECOMMENDED.map((group, index) => (
                        <div key={index} className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={group.pic}
                                    alt='' />
                                <p>{group.name}</p>
                            </div>
                            <button className='items-center bg-[#F1F3F5] text-[#212529] text-xs w-16 h-6 rounded inline-flex gap-2 justify-center '>Follow</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Recommended
