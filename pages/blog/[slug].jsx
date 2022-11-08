import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'

const PostPage = ({frontmatter: {title, date, cover_image}, slug, content}) => {
  return (
    <div className='w-full mb-20'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <Image layout='fill' objectFit='cover' src={cover_image}/>
        </div>
        <div className='h-200 text-center'>
            <h1 className='mt-5'>{title}</h1>
            <p className='p-8'>{date}</p>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            <br/>
            <Link href='/#blog'><button className='px-6 py-2 mt-4'> Go Back </button></Link>
        </div>
    </div>
  )
}

export default PostPage;

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug : filename.replace('.md', '')
        }
    }))
    
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps ({params: { slug } }){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    
    const {data: frontmatter, content} = matter(markdownWithMeta)
    
    return {
        props:{
            frontmatter, 
            slug,
            content,
        },
    }
}

