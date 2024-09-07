import { Prisma } from "@prisma/client";
import prismaClient from "@/service/prisma/prisma-client";

export class PostService {
  constructor() {}

  public search(params: Prisma.PostFindManyArgs) {
    return prismaClient.post.findMany(params);
  }
}

export const postService = new PostService();
