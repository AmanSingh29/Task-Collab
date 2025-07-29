import { projectResolvers } from "./project/project.resolvers.js";
import { taskResolvers } from "./task/task.resolver.js";
import { userResolver } from "./user/user.resolvers.js";

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...taskResolvers.Query,
    ...projectResolvers.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...taskResolvers.Mutation,
    ...projectResolvers.Mutation
  },
};
