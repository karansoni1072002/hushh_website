import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../_components/blogHome/HomeCoverSection";
import FeaturedPosts from "../_components/blogHome/FeaturedPosts";
import RecentPosts from "../_components/blogHome/RecentPosts";

export default function hushhBlogs() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
