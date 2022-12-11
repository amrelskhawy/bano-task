import React, {useContext} from 'react'
import { ReactComponent as FBIcon } from '../../assets/images/f_logo_RGB-Blue_1024.svg'
import {ImCancelCircle} from 'react-icons/im'
import { ReactComponent as GoogleIcon } from '../../assets/images/search.svg'
import { ReactComponent as SignUpImg } from '../../assets/images/signup.svg'
import { SignUpContext } from '../../context/signup.context'
const SignUp = () => {
    const {isOpen,setIsOpen} = useContext(SignUpContext)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div  className='absolute w-full h-screen bg-[#00000063] top-0 left-0 flex justify-center items-center'>
            <div className='xs:w-[760px] w-[500px] md:w-full md:absolute md:bottom-0  shadow rounded-lg bg-white relative overflow-hidden'>
            <ImCancelCircle onClick={toggle} className='cursor-pointer absolute z-10 right-8 top-14 lg:top-16 text-2xl ' />
                <p className='bg-[#EFFFF4] md:hidden  p-4 '>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                <div className='grid xs:grid-cols-2 xs:gap-8 xs:px-6'>
                    <div className='p-4 '>
                        <h3 className='text-2xl my-4 text-left font-bold'>Create Account</h3>
                        <form className='grid grid-cols-2 '>
                            <input type='text'
                                placeholder='First Name'
                                className='form-input placeholder:form-input-placeholder'
                            />
                            <input
                                type='text'
                                placeholder='Last Name'
                                className=' form-input placeholder:form-input-placeholder'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='col-span-2 form-input placeholder:form-input-placeholder'
                            />
                            <input type='password'
                                placeholder='Password'
                                className='col-span-2 form-input placeholder:form-input-placeholder' />
                            <input type='password'
                                placeholder='Confirm Password'
                                className='col-span-2 form-input placeholder:form-input-placeholder'
                            />
                        </form>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] px-2 rounded-full w-full mt-3 '>Create Account</button>
                        <div className='grid mt-4 mb-3 gap-2'>
                            <button className='w-full  flex items-center gap-2 justify-center font-medium p-[.6rem] rounded border'><FBIcon className='text-blue-700' />Sign up with Facebook</button>
                            <button className='w-full flex items-center gap-2 justify-center font-medium  p-[.6rem] rounded border'><GoogleIcon />Sign up with Google</button>
                        </div>
                        <p className='realtive md:text-center text-[#3D3D3D] top-8 xs:hidden font-medium'>Already have an account? <span className='text-[#2F6CE5]  font-bold'>Sign In</span></p>
                    </div>
                    <div className='flex flex-col
                     justify-center  p-4 mt-4 md:hidden'>
                        <p className='realtive hidden xs:flex text-[#3D3D3D] top-8 text-right font-medium'>Already have an account? <span className='text-[#2F6CE5] font-bold'>Sign In</span></p>
                        <SignUpImg className='hidden xs:flex w-[350px] h-[90%] mr-4 self-center p-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
