import React from 'react'
import Image from 'next/image'
import { allBlogs } from '@/.contentlayer/generated'
import { sortBlogs } from '@/utils';
import Link from 'next/link';
import Tag from './Elements/Tag';

type Props = {
  blogs: any;
}

const HomeCoverSection = ( {blogs}: Props) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  
  return (
    <div className="w-full">
      <article className='rounded-3xl flex flex-col items-start justify-end relative mx-20 h-[80vh]'>
        
        {/* dark overlay - same size as the overall div and blog image */}
        <div 
          className="absolute top-0 left-0 bottom-0 right-0 h-full
          bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-10
          "
        />
        
        <Image 
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          width='1000'
          height='1000'
          className='absolute w-full h-full object-center object-cover rounded-3xl'
        />

        {/* Tag / Title / Description */}
        <div className="border border-purple-500 w-3/4 space-y-5 p-24 flex flex-col items-start justify-center z-10">
          <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]}></Tag>

          <Link href={blog.title} className='mt-6'>
            <h1 className='font-bold captitalize text-4xl'>
              <span className={`bg-gradient-to-r from-accent2 to-accent2 bg-[length:0px_6px] 
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500
              `}>
                {blog.title}
              </span>
            </h1>
          </Link>
          
          <p className='inline-block mt-4 text-xl font-r'>
            Description: {blog.description}
          </p>
        </div>
      </article>
    </div>
  )
}

export default HomeCoverSection