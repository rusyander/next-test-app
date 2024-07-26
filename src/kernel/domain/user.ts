export type UserId = string;
export type Role = "ADMIN" | "USER";

export const ROLES: Record<Role, Role> = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export type SharedUser = {
  id: UserId;
  email: string;
  emailVerified?: Date | null;
  role: Role | null;
  name?: string | null;
  image?: string | null;
};

export type SharedSession = {
  user: {
    id: UserId;
    email: string;
    role: Role;
    name?: string | null;
    image?: string | null;
  };
  expires: string;
};
