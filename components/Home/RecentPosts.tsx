import { sortBlogs } from '@/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  blogs: any;
}

const RecentPosts = ({ blogs }: Props) => {
  const sortedBlogs = sortBlogs(blogs)

  return (
    <section className='w-full mt-12 px-20 flex flex-col items-center justify-center'>

      {/* Section Title */}
      <div className="flex w-full justify-between">
        <h2 className='inline-block font-bold capitalize text-4xl'>Recent Posts</h2>
        <Link href='/categories/all' className='inlne-block font-medium text-yellow-400 underline underline-offset-2 text-lg'>View All Blogs</Link>
      </div>

      {/* Display Blogs */}
      <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-16">
        {
          sortedBlogs.slice(0,4).map((blog, index) => {
            return(
              <article key={blog} className='col-span-1 row-span-1 relative'>Blog Layout 3</article>
              )
          })
        }
      </div>

    </section>
  )
}

export default RecentPosts