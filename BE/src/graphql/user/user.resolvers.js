import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
    createUser: async (_, { name, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
      };
    },
    deleteUser: async (_, args) => {
      return await prisma.user.delete({
        where: { id: args.id },
      });
    },
    login: async (_, { email, password }) => {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (!existingUser) {
        return {
          success: false,
          message: "Invalid Credentials!",
          user: null,
        };
      }
      const isPasswordCorrect = await bcrypt.compare(
        existingUser.password,
        password
      );
      console.log("existinuser----------", existingUser.password, isPasswordCorrect, password)
      if (!isPasswordCorrect) {
        return {
          success: false,
          message: "Invalid Credentials!",
          user: null,
        };
      }
      return {
        success: true,
        message: "Login successful",
        user: {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          created_at: existingUser.created_at,
          updated_at: existingUser.updated_at,
        },
      };
    },
  },
};
