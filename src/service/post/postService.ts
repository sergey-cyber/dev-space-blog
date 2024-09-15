import { Post, Prisma } from "@prisma/client";
import _prismaClient from "@/service/prisma/prisma-client";
import { IServiceClient } from "../client/IClient";
import { Roles } from "@/entity/role/roles";
import { access } from "../../lib/auth/access";

export class PostService {
  private client;
  constructor(client: IServiceClient) {
    this.client = client;
  }

  public search<T extends Pick<Prisma.PostFindManyArgs, "include">>(
    params: Prisma.PostFindManyArgs & T,
  ) {
    return this.client.post.findMany(params) as Promise<
      Prisma.PostGetPayload<T>[]
    >;
  }

  @access([Roles.ADMIN, Roles.AUTHOR])
  public async createPost(post: Pick<Post, "title" | "authorId" | "content">) {
    return this.client.post.create({ data: post });
  }
}

export const postService = new PostService(_prismaClient);
