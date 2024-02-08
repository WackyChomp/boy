'use client'
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'


type Props = {
  blog: any;
}

const mdxComponents = {
  Image
}

const RenderMdx = ({ blog }: Props) => {
  const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div>
      <MDXContent components={mdxComponents} />      
    </div>
  )
}

export default RenderMdx