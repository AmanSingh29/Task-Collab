import { taskResolvers } from "./task/task.resolver.js";
import { userResolver } from "./user/user.resolvers.js";

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...taskResolvers.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...taskResolvers.Mutation
  },
};
