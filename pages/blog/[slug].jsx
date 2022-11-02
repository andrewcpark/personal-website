import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

const PostPage = ({frontmatter: {title, date, cover_image}, slug, content}) => {
  return (
    <div className='h-200 text-center'>
        <img src={cover_image}/>
        <h1 className='mt-5'>{title}</h1>
        <p>Posted on {date}</p>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        <Link href='/#blog'><button> Go Back </button></Link>
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

