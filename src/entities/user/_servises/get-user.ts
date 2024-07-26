import { userRepository } from "../_repositories/user.repository";
import { createUserAbility } from "../_domain/user-ability";
import { AuthorizationError } from "@/shared/lib/errors";
import { SharedSession, UserId, SharedUser } from "@/kernel/domain/user";

type GetUser = {
  userId: UserId;
  session: SharedSession;
};

export class GetUserServices {
  async exec({ userId, session }: GetUser): Promise<SharedUser> {
    const ability = createUserAbility(session).canGetUser(userId);
    if (!ability) {
      throw new AuthorizationError();
    }

    return await userRepository.getUserById(userId);
  }
}

export const getUSerServices = new GetUserServices();
