import { Prisma } from "@prisma/client";
import prismaClient from "@/service/prisma/prisma-client";

export class PostService {
  constructor() {}

  public search<T extends Pick<Prisma.PostFindManyArgs, "include">>(
    params: Prisma.PostFindManyArgs & T,
  ) {
    return prismaClient.post.findMany(params) as Promise<
      Prisma.PostGetPayload<T>[]
    >;
  }
}

export const postService = new PostService();
