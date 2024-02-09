
import { allBlogs } from "@/.contentlayer/generated"
import Tag from "@/components/Home/Elements/Tag"
import Image from "next/image"
import Footer from "@/components/Footer"
import QuickBlogDetails from "@/components/Blog/QuickBlogDetails"
import RenderMdx from "@/components/Blog/RenderMdx"


export default function Page({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

  return(
    <article>

      <p>
        My Posts: {params.slug}
      </p>

      <div className="mb-5 text-center relative w-full h-[50vh]">
        <div className="z-10 w-full flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag 
            name={blog.tags[0]} 
            link={`/categories${blog.tags[0]}`} 
            className='px-6 text-sm py-2'
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-yellow-600 text-5xl leading-normal realtive w-5/6">
            {blog.title}
          </h1>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/70" />

        <Image 
        src={blog.image.filePath.replace('../public', '')}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className='w-full h-full aspect-square object-cover object-center'
        />

      </div>

      <QuickBlogDetails blog={blog} slug={params.slug} />

      {/* 1) Table of Contents --- 2) Blog mdx contents */}
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">Table of Contents</div>
        
        <RenderMdx blog={blog} />
      </div>

      <Footer />
    </article>
  )
}