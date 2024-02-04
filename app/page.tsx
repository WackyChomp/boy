import Image from 'next/image'
import { allBlogs } from '../.contentlayer/generated'
import HomeCoverSection from '@/components/Home/HomeCoverSection'
import FeaturedPosts from '@/components/Home/FeaturedPosts'
import RecentPosts from '@/components/Home/RecentPosts'
import Footer from '@/components/Footer'

export default function Home() {
  console.log(allBlogs)
  return (
    <main className="flex flex-col items-center justify-center">
      Hello from the other side!!!
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <Footer />
    </main>
  )
}
