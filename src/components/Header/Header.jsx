import React, { useContext } from 'react'
import { BiSearch } from 'react-icons/bi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { ReactComponent as Logo } from '../../assets/images/Union 1.svg'
import { SignUpContext } from '../../context/signup.context'
const Header = () => {
    const {isOpen,setIsOpen} = useContext(SignUpContext)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <header className='flex justify-between items-center w-full px-8 py-0 h-20'>
            <div className='flex mr-2 items-center text-3xl uppercase text-[#5C5D5D]'>
                <span className='text-[#27A365]'>ATG.</span>
                W <Logo className='w-6 h-6 mx-[2px] inline-block bottom-[2px]' />
                rld
            </div>
            <div className='  hidden xs:flex items-center w-full max-w-[600px] bg-[#f2f2f2] rounded-3xl p-2 text-[#7A7A7A] '>
                <BiSearch className='w-[10%]' />
                <input
                    type='text'
                    placeholder="Search for your favorite groups in ATG"
                    className='w-[90%] bg-transparent border-none outline-none placeholder:text-xs '
                />
            </div>
            <div className='min-w-[200px] hidden xs:flex items-center ml-2 text-right text-[#2E2E2E] text-sm'>
                <p className='cursor-pointer'>Create account.<a onClick={toggle} className='font-bold text-[#2f6ce5] '>It’s free!</a></p>
                <RiArrowDropDownFill className='text-3xl ' />
            </div>
            <AiOutlineMenu className= 'cursor-pointer flex xs:hidden text-4xl ml-4' />
        </header>
    )
}

export default Header
