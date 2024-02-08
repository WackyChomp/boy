import React from 'react'
import {format, parseISO} from 'date-fns'
import Link from 'next/link'

type Props = {
  blog: any;
  slug: any;
}

const QuickBlogDetails = ({blog, slug}: Props) => {
  return (
    <div className='flex px-10 bg-slate-700 text-light py-2 items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg'>
      <time className='m-3'>
        {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
      </time>

      <span className='m-3'>??? Views</span>

      <div className='m-3'>
        {blog.readingTime.text}
      </div>

      <Link href={`/categories/${blog.tags[0]}`} className='m-3'>
        # {blog.tags[0]}
      </Link>
    </div>
  )
}

export default QuickBlogDetails