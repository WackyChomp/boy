import React from 'react'
import Tag from '../Home/Elements/Tag';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  blog: any;
}

const BlogLayoutOne = ({ blog }: Props) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
      
      {/* dark overlay - same size as the overall div and blog image */}
      <div 
        className="absolute top-0 left-0 bottom-0 right-0 h-full
        bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-10"
      />
    
      <Image 
        src={blog.image.filePath.replace('../public', '')}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className='w-full h-full object-center object-cover rounded-3xl'
      />

      {/* Tag / Title / Description */}
      <div className="w-full absolute bottom-0 p-10 z-20">
        <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]}/>

        <Link href={blog.url_path} className='mt-6'>
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

export default BlogLayoutOne