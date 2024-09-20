import { Post, Prisma } from "@prisma/client";
import _prismaClient from "@/service/prisma/prisma-client";
import { IServiceClient } from "../client/IClient";
import { Roles } from "@/entity/role/roles";
import { access } from "../../lib/auth/access";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PostService {
  private client;
  constructor(client: IServiceClient) {
    this.client = client;
  }

  public get<T extends Prisma.PostInclude>(id: string, args: { include: T }) {
    return this.client.post.findUnique({ where: { id }, ...args });
  }

  public search<T extends Prisma.PostInclude>(params?: {
    where?: Prisma.PostWhereInput;
    include: T;
  }) {
    return this.client.post.findMany(params);
  }

  @access([Roles.ADMIN, Roles.AUTHOR])
  public async createPost(post: Pick<Post, "title" | "authorId" | "content">) {
    return this.client.post.create({ data: post });
  }
}

export const postService = new PostService(_prismaClient);
