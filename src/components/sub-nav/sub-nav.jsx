import React, {useContext} from 'react'
import {MdGroupAdd} from 'react-icons/md'
import { RiArrowDropDownFill } from 'react-icons/ri'
import './subnav.css'
import { SignUpContext } from '../../context/signup.context'
const SubNav = () => {
    const Links = [
        'All Posts (32)',
        'Article',
        'Event',
        'Education',
        'Job',
    ]
    const {setIsOpen} = useContext(SignUpContext)
    const toggle = () => setIsOpen(true)

    return (
        <div className='flex justify-between items-center my-6 relative py-4 w-full px-8 h-20 max-w-[1440px] mx-auto '>
            <h3 className='flex 2xs:hidden font-bold text-2xl '>Posts (360)</h3>
            <ul className='hidden 2xs:flex gap-4 text-xl text-[#8A8A8A] before:absolute before:w-full before:h-[2px] before:bg-[#8A8A8A] before:bottom-0 before:left-0'>
                {
                    Links.map((link,i) => 
                        (<li key={i} className={i ==0 ? 'active text-[#000] font-bold before:absolute before:w-[170px] before:h-[2px] before:bg-black before:bottom-0 before:left-0' : null} >{link}</li>)
                        )
                }
            </ul>
            <div className='  hidden 2xs:flex items-center gap-2'>
                <button className='items-center bg-[#F1F3F5] text-[#212529] py-2 px-4 rounded inline-flex gap-2'>Write a Post <RiArrowDropDownFill className='text-3xl'/></button>

                <button onClick={toggle} className='flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><MdGroupAdd className='text-xl' /> Join A Group
                </button>
            </div>
            <button onClick={toggle} className='2xs:hidden items-center bg-[#F1F3F5] text-[#212529] py-2 px-4 rounded inline-flex gap-2'>Filter: All 
            <RiArrowDropDownFill className='text-3xl'/></button>
        </div>
    )
}

export default SubNav