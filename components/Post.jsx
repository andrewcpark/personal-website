import React from 'react';
import Link from 'next/link';

const Post = ({post}) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-row-2 gap-4 justify-center items-center' >
            <img src={post.frontmatter.cover_image} alt='' />
            <div>
                <p> Posted on {post.frontmatter.date} </p>
                <h3 className='flex flex-col items-center justify-center'>{post.frontmatter.title}</h3>

                <p>{post.frontmatter.excerpt}</p>
            </div>
        <Link href={`/blog/${post.slug}`}><button> Read More </button></Link>
        </div>
    </div>
  )
}

export default Post