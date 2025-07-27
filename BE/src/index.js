import express from "express";
import { ApolloServer } from "@apollo/server";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { PrismaClient } from "@prisma/client";
import { expressMiddleware } from "@as-integrations/express5";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

const app = express();

// Creating Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Starting Apollo server
async function startServer() {
  await server.start();
  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        prisma,
        req,
      }),
    })
  );
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((err) => {
  console.error("❌ Server failed to start:", err.message);
});
