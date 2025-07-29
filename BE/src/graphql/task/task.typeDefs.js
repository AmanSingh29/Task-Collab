export const taskTypeDefs = `
    type Task {
        id: ID!
        title: String!
        description: String!
        status: String!
        assigned_to: User!
        project: Project!
        created_at: String!
        updated_at: String!
    }

    type Query {
        getAllTasks: [Task]!
        getTaskById(id: ID!): Task!
    }

    type Mutation {
        createTask(title: String!, description: String!, assigned_to_id: ID!, project_id: ID!): Task!
        deleteTask(id: ID!): Task!
    }
`;
