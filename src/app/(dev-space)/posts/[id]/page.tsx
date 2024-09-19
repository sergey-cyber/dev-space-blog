import { postService } from "@/service/post/postService";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await postService.get(params.id);

  return <div>{post?.title}</div>;
}
