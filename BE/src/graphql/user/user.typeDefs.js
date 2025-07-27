export const userTypeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
        created_at: String!
        updated_at: String!
    }
    
    type Query {
        getAllUsers: [User!]!
        getUserById(id: ID!): User
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User
        deleteUser(id: ID!): User
    }
`;
