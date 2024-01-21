import React from 'react'
import Image from 'next/image'
import { allBlogs } from '@/.contentlayer/generated'
import { sortBlogs } from '@/utils';
import Link from 'next/link';

type Props = {
  blogs: any;
}

const HomeCoverSection = ( {blogs}: Props) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  
  return (
    <article className='bg-yellow-500 flex flex-col items-start justify-end mx-10 relative h-[85vh'>
      <Image 
        src={blog.image.filePath.replace('../public', '')}
        alt={blog.title}
        width='100'
        height='100'
        className='w-full h-full object-center object-cover rounded-3xl'
      />

      <div className="w-3/4 space-y-5 p-16 flex flex-col items-start justify-center z-0">
        <Link href={`/categories/${blog.tags[0]}`}>
          Tags: {blog.tags.join(' || ')}
        </Link>
        <h1>Title: {blog.title}</h1>
        <p>Description: {blog.description}</p>
      </div>
    </article>
  )
}

export default HomeCoverSection