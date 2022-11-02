import React from 'react';
import Link from 'next/link';

const Post = ({post}) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-row-2 gap-4 justify-center items-center' >
            <img className='rounded-xl' src={post.frontmatter.cover_image} alt='' />
            <div>
                <h3 className=' p-2 flex flex-col items-center justify-center uppercase'>{post.frontmatter.title}</h3>
                <p className='p-2 text-xs italic'> Posted on {post.frontmatter.date} </p>
            </div>
        <Link href={`/blog/${post.slug}`}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> Read More</p>
        </Link>
        </div>
    </div>
  )
}

export default Post