import { createPostRoute } from "@/routes/self/self-route";
import { authService } from "@/service/auth/authService";
import { postService } from "@/service/post/postService";
import { PostListItem } from "@/ui/components/modules/post";
import { EmptyList } from "@/ui/components/shared/empty-list";
import { Button, buttonVariants } from "@/ui/shadcn/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function MyPostsPage() {
  const principal = authService.getPrincipalStricktly();
  const posts = await postService.search({
    where: { authorId: (await principal).id },
    include: { author: true },
  });

  return (
    <section className="space-y-6">
      <div className="flex justify-end">
        <Link
          href={createPostRoute.getPath()}
          className={buttonVariants({ variant: "default" })}
        >
          <Plus className="mr-2 h-4 w-4" />
          Добавить
        </Link>
      </div>
      {posts.length ? (
        posts.map((post) => <PostListItem key={post.id} post={post} />)
      ) : (
        <EmptyList />
      )}
    </section>
  );
}
