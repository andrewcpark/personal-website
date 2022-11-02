import React from 'react';
import Link from 'next/link';

const Post = ({post}) => {
  return (
    <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-row-2 gap-4 justify-center items-center' >
            <img className='rounded-xl' src={post.frontmatter.cover_image} alt='' />
            <div>
                <h3 className=' p-6 flex flex-col items-center justify-center uppercase'>{post.frontmatter.title}</h3>
            </div>
        <Link href={`/blog/${post.slug}`}>
            <p className='text-center py-3 text-gray-700 hover:text-[#1e97f3] font-bold text-m cursor-pointer'> Read More</p>
        </Link>
        </div>
    </div>
  )
}

export default Post