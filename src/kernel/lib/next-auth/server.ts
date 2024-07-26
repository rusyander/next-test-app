import { getServerSession } from "next-auth";
import { NeedAuthError } from "@/shared/lib/errors";
import { nextAuthConfig } from "@/kernel/lib/next-auth/next-auth-config";

export const getAppSessionServer = () => getServerSession(nextAuthConfig);
export const getAppSessionStrictServer = async () => {
  const session = await getAppSessionServer();
  if (session === null) {
    throw new NeedAuthError();
  }
  return session;
};
