import React from 'react'
import {format, parseISO} from 'date-fns'

type Props = {
  blog: any;
  slug: any;
}

const QuickBlogDetails = ({blog, slug}: Props) => {
  return (
    <div className='flex justify-between px-10'>
      <time>
        {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
      </time>
      <span>??? Views</span>
    </div>
  )
}

export default QuickBlogDetails