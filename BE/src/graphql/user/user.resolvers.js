import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userResolver = {
  Query: {
    getAllUsers: async () => {
      return await prisma.user.findMany();
    },
    getUserById: async (_, args) => {
      return await prisma.user.findUnique({
        where: { id: args.id },
      });
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      return await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });
    },
    deleteUser: async (_, args) => {
      return await prisma.user.delete({
        where: { id: args.id },
      });
    },
  },
};
