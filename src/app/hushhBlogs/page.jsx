import { allBlogs } from "../../../.contentlayer/generated";
import HomeCoverSection from "../_components/blogs/HomeCoverSection";
import FeaturedPosts from "../_components/blogs/FeaturedPosts";
import RecentPosts from "../_components/blogs/RecentPosts";

export default function hushhBlogs() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
