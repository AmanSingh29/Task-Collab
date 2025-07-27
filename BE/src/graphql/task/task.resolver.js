import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const taskResolvers = {
  Query: {
    getAllTasks: async () => {
      return await prisma.task.findMany({
        include: { assigned_to: true },
      });
    },
    getTaskById: async (_, { id }) => {
      return await prisma.task.findFirst({
        where: { id },
        include: { assigned_to: true },
      });
    },
  },
  Mutation: {
    createTask: async (_, { title, description, assigned_to_id }) => {
      return await prisma.task.create({
        data: {
          title,
          description,
          assigned_to_id,
        },
        include: { assigned_to: true },
      });
    },
  },
};
