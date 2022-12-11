import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsFillShareFill, BsThreeDots } from 'react-icons/bs'
import './PostBox.css'



const PostBox = ({ post }) => {
    const {
        article_icon, article_type,
        post_cover,
        headline, description,
        avatar, person_name, views_count
    } = post
    return (
        <div className='post-box w-full max-w-[800px] h-[600px] bg-white border border-[#E0E0E0] overflow-hidden flex flex-col text-left'>
            <img className='w-full h-full max-h[80%]' src={post_cover} alt='' />
            <div className='content p-4 font-[500] text-xl leading-6 relative flex flex-col gap-4'>
                <p>{article_icon} {article_type}</p>
                <h3 className='max-w-[90%] text-2xl '>{headline}</h3>
                <p className='text-xl font-normal text-[#5C5C5C]'>{description}</p>
                <BsThreeDots className='absolute right-[6%] top-[26.5%]' />
                <div className='flex md:flex-col md:gap-2 justify-between items-center'>
                    <div className='flex items-center font-bold gap-4 lg:gap-4 xs:gap-2 xs:text-sm lg:text-lg'>
                        <img className='avatar xs:w-[30px] ' alt='' src={avatar} />
                        {person_name}
                    </div>
                    <div className='text-xl xs:text-sm lg:text-lg font-normal text-[#5C5C5C] flex justify-between items-center'>
                        <div className='text-xl flex items-center gap-2 text-[#525252] mr-8'>
                            <AiOutlineEye className='text-2xl relative top-[1px]' />
                            <span className=''>{views_count} views</span>
                        </div>
                        <div className='bg-[#EDEEF0] rounded py-[10px] px-[12px] '>
                            <BsFillShareFill  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostBox
