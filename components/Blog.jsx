import React from 'react'
import Post from '../components/Post'


const Blog = ({posts}) => {
  return (
    <div id='blog' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#1e97f3]'> Blog </p>
            <h2 className='py-4'> My Latest Posts </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {posts.slice(0,3).map((posts, index) => (
                    <div key={index}>
                        <Post post={posts}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog;

