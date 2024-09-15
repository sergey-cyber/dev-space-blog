"use server";

import { CreatePostPayload } from "@/entity/role/post/post";
import { authService } from "@/service/auth/authService";
import { postService } from "@/service/post/postService";
import { myPostsRoute } from "@/routes/self/self-route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(payload: CreatePostPayload) {
  try {
    const principal = await authService.getPrincipalStricktly();
    await postService.createPost({
      ...payload,
      authorId: principal.id,
    });
  } catch (err) {
    return { error: { message: "Ошибка при создании поста." } };
  }

  const redirectPath = myPostsRoute.getPath();
  revalidatePath(redirectPath);
  redirect(redirectPath);
}
