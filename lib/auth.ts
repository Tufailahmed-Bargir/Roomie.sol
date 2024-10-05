import prisma from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@prisma/client";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      role: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email || !user.name || !user.image) {
        return false;
      }
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });
      if (existingUser) {
        // Update the user's information if necessary
        await prisma.user.update({
          where: { email: user.email },
          data: {
            name: user.name,
            image: user.image,
          },
        });
        return true;
      }
      // Create a new user if they don't exist
      await prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          image: user.image,
          role: "USER", // Default role for new users
        },
      });
      return true;
    },
    async session({ session, user }) {
      // Add role to the session
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      if (dbUser) {
        session.user.role = dbUser.role;
        session.user.id = dbUser.id;
      }
      return session;
    },
  },
};

