import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const projectResolvers = {
  Query: {
    getAllProjects: async () => {
      return await prisma.project.findMany();
    },
    getProjectById: async (_, { id }) => {
      return await prisma.project.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createProject: async (_, { name }) => {
      return prisma.project.create({
        data: { name },
      });
    },
    deleteProject: async (_, { id }) => {
      return prisma.project.delete({
        where: { id },
      });
    },
  },
};
