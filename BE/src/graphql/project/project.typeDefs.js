export const projectTypeDefs = `
    type Project {
        id: ID!
        name: String!
        created_at: String!
        updated_at: String!
    }

    type Query {
        getAllProjects: [Project]!
        getProjectById(id: ID!): Project!
    }

    type Mutation {
        createProject(name: String!): Project!
        deleteProject(id: ID!): Project!
    }
`