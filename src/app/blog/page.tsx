import { postService } from "@/service/post/postService";
import { PostListItem } from "@/ui/components/modules/post";

export default async function BlogPage() {
  const posts = await postService.search({ include: { author: true } });
  return (
    <section className="container space-y-6">
      {posts.map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </section>
  );
}
