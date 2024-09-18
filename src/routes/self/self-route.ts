import { RouteDef } from "../route-def";

export const profileRoute: RouteDef = {
  getPath: () => "/self",
};

export const personalInfoRoute: RouteDef = {
  getPath: () => profileRoute.getPath() + "/personal-info",
};

export const myPostsRoute: RouteDef = {
  getPath: () => profileRoute.getPath() + "/my-posts",
};

export const createPostRoute: RouteDef = {
  getPath: () => myPostsRoute.getPath() + "/create",
};
