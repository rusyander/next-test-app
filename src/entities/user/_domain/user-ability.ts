import { ROLES, SessionEntity, UserId } from "./types";

export const createUserAbility = (session: SessionEntity) => ({
  canGetProfile: () => {},
  canGetUser: (userId: UserId) =>
    session.user.id === userId || session.user.role === ROLES.ADMIN,
});
