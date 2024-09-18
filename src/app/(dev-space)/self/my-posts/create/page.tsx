import { CreatePostForm } from "@/ui/components/post";

export default function CreatePostPage() {
  return (
    <section className="gap-y-6">
      <p className="text-xl font-medium">Создание поста</p>
      <CreatePostForm />
    </section>
  );
}
