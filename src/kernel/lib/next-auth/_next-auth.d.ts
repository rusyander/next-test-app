import NextAuth from "next-auth";
import { SharedSession, SharedUser } from "./domain/types";

declare module "next-auth" {
  interface Session {
    user: SharedSession["user"];
  }
  interface User extends SharedUser {}
}
