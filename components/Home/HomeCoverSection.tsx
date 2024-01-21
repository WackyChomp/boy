import React from 'react'
import Image from 'next/image'
import { allBlogs } from '@/.contentlayer/generated'

type Props = {
  blogs: any;
}

const HomeCoverSection = ( {blogs}: Props) => {
  return (
    <article className='bg-yellow-500 flex flex-col items-start justify-end mx-10 relative h-[85vh'>
      <Image 
        src={blogs.image}
        alt={blogs.title}
        height='100'
        className='w-full h-full object-center object-cover rounded-3xl'
      />
    </article>
  )
}

export default HomeCoverSection