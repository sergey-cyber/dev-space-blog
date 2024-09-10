import { authService } from "@/service/auth/authService";
import { postService } from "@/service/post/postService";
import { PostListItem } from "@/ui/features/post";
import { EmptyList } from "@/ui/shared/empty-list";
import { Button } from "@/ui/shared/shadcn/ui/button";
import { Plus } from "lucide-react";

export default async function MyPostsPage() {
  const principal = authService.getPrincipalStricktly();
  const posts = await postService.search({
    where: { authorId: (await principal).id },
    include: { author: true },
  });

  return (
    <section className="space-y-6">
      <div className="flex justify-end">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Добавить
        </Button>
      </div>
      <div>
        {posts.length ? (
          posts.map((post) => <PostListItem post={post} />)
        ) : (
          <EmptyList />
        )}
      </div>
    </section>
  );
}
