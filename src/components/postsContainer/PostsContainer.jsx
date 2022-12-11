import React from 'react'
import PostBox from '../../components/post-box/PostBox'
import POSTS from '../../assets/data'
import {BiPencil} from 'react-icons/bi'
const PostsContainer = () => {
    return (
        <div className='posts-container flex flex-col gap-4 my-4 relative'>
            <BiPencil className=' fixed bottom-10 right-10 bg-gradient-to-r from-[#FF5C5C] to-[#F0568A] text-xl w-16 h-16 p-3 rounded-full text-white md:flex hidden z-10 shadow-xl' />
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
