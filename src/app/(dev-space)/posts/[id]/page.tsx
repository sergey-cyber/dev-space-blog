import { postService } from "@/service/post/postService";
import { Post } from "@/ui/components/post/post";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await postService.get(params.id, {
    include: { author: true },
  });

  if (!post) {
    return null;
  }

  return <Post post={post} />;
}
