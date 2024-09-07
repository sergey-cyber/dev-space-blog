import { RouteDef } from "../route-def";

export const profileRoute: RouteDef = {
  getPath: () => "/blog/self",
};

export const personalInfoRoute: RouteDef = {
  getPath: () => profileRoute.getPath() + "/personal-info",
};

export const myPosts: RouteDef = {
  getPath: () => profileRoute.getPath() + "/my-posts",
};
