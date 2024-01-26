import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type Props = {
  blog: any;
}

const BlogLayoutTwo = ({ blog }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-4 items-center text-yellow-400'>

      <Link href={blog.title} className='col-span-4 h-full rounded-xl overflow-hidden'>
        <Image 
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className='w-full h-full aspect-square object-center object-cover rounded-3xl'
        />
      </Link>

        {/* Tag / Title / Description */}
        <div className="w-full col-span-8">
        <span className='uppercase text-accent1 font-semibold text-lg'>{blog.tags[0]}</span>

        <Link href={blog.title} className='inline-block my-2'>
          <h1 className='font-bold captitalize text-2xl text-light mt-5'>
            <span className={`bg-gradient-to-r from-accent2 to-accent2 bg-[length:0px_6px] 
              hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500
            `}>
              {blog.title}
            </span>
          </h1>
        </Link>
        
      </div>
    </div>
  )
}

export default BlogLayoutTwo