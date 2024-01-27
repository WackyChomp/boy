import { sortBlogs } from '@/utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';

type Props = {
  blogs: any;
}

const FeaturedPosts = ( { blogs } : Props) => {
  const sortedBlogs = sortBlogs(blogs)

  return (
    <section className='w-full mt-12 px-20 flex flex-col items-center justify-center'>
      <h2 className='w-full inline-block font-bold capitalize text-4xl'>Feature Posts</h2>

      <div className="grid grid-cols-2 grid-rows gap-6 mt-6">
        <article className='col-span-1 row-span-2 relative'><BlogLayoutOne blog={sortedBlogs[1]}/></article>
        <article className='col-span-1 row-span-1 relative'><BlogLayoutTwo blog={sortedBlogs[2]}/></article>
        <article className='col-span-1 row-span-1 relative'><BlogLayoutTwo blog={sortedBlogs[3]}/></article>
        <article className='col-span-1 row-span-1 relative'>blog layout 2</article>
        <article className='col-span-1 row-span-1 relative'>blog layout 3</article>


      </div>
    </section>
  )
}

export default FeaturedPosts