import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import format from 'date-fns/format'

type Props = {
  blog: any;
}

const BlogLayoutThree = ({ blog }: Props) => {
  return (

      <div className='flex flex-col items-center p-3 rounded-xl bg-green-400'>
  
        <Link href={blog.url_path} className='group h-full rounded-xl overflow-hidden'>
          <Image 
            src={blog.image.filePath.replace('../public', '')}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className='w-full h-full aspect-[4/3] object-center object-cover rounded-3xl group-hover:scale-105 transition-all ease duration-300'
          />
        </Link>
  
          {/* Tag / Title / Description */}
          <div className="w-full flex flex-col mt-3 p-3 bg-black/60 border border-red-500">
  
            <span className='uppercase text-blue-400 font-semibold text-lg'>{blog.tags[0]}</span>
    
            <Link href={blog.url_path} className='inline-block my-2'>
              <h1 className='font-bold captitalize text-2xl text-light'>
                <span className={`bg-gradient-to-r from-accent2 to-accent2 bg-[length:0px_6px] 
                  hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500
                `}>
                  {blog.title}
                </span>
              </h1>
            </Link>
            
            <span className='capitalize text-white font-semibold text-base'>
              {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
            </span>
          </div>
      </div>
    )
  
}

export default BlogLayoutThree