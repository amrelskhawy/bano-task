import React, {useContext} from 'react'
import  {SignUpContext} from '../../context/signup.context'
import PostBox from '../../components/post-box/PostBox'
import POSTS from '../../assets/data'
import {BiPencil} from 'react-icons/bi'
const PostsContainer = () => {
    const {setIsOpen} = useContext(SignUpContext)
    const toggle = () => setIsOpen(true)
    return (
        <div className=' flex flex-col gap-4 m-4 relative'>
            <BiPencil onClick={toggle} className=' fixed bottom-10 right-10 bg-gradient-to-r from-[#FF5C5C] to-[#F0568A] text-xl w-16 h-16 p-3 rounded-full text-white md:flex hidden z-10 shadow-xl' />
            {
                POSTS.map((post, index) => {
                    return (
                        <PostBox key={index} post={post} />
                    )
                })
            }

        </div>
    )
}

export default PostsContainer
