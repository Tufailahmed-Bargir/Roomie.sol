import prisma from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";

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

  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
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
      if (!user.email || !user.name) {
        return false;
      }

      const adminEmail = process.env.ADMIN_EMAIL;
      const role = user.email === adminEmail ? "ADMIN" : "USER";

      console.log("Signing in user:", user.email);
      console.log("Assigned role:", role);

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (existingUser) {
        await prisma.user.update({
          where: { email: user.email },
          data: {
            name: user.name,
            image: user.image ?? undefined,
            role: role,
          },
        });
      } else {
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image ?? undefined,
            role: role,
          },
        });
      }

      user.role = role;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && typeof token.role === "string") {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
