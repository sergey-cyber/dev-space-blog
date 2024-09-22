import { Post, Prisma } from "@prisma/client";
import _prismaClient from "@/service/prisma/prisma-client";
import { IServiceClient } from "../client/IClient";
import { Roles } from "@/entity/role/roles";
import { Access } from "../../lib/auth/access";

export class PostService {
  private client;
  constructor(client: IServiceClient) {
    this.client = client;
  }

  public get<T extends Prisma.PostInclude>(id: string, args: { include: T }) {
    return this.client.post.findUnique({ where: { id }, ...args });
  }

  public search<T extends Prisma.PostInclude>(
    params?: Omit<Prisma.PostFindManyArgs, "include"> & { include: T },
  ) {
    return this.client.post.findMany(params);
  }

  @Access([Roles.ADMIN, Roles.AUTHOR])
  public async createPost(post: Pick<Post, "title" | "authorId" | "content">) {
    return this.client.post.create({ data: post });
  }
}

export const postService = new PostService(_prismaClient);
