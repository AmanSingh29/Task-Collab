import { gql } from "graphql-tag";
import { userTypeDefs } from "./user/user.typeDefs.js";
import { taskTypeDefs } from "./task/task.typeDefs.js";

export const typeDefs = gql`
  ${userTypeDefs}
  ${taskTypeDefs}
`;
