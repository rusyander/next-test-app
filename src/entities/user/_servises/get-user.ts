import { SessionEntity, UserEntity, UserId, Profile } from "../_domain/types";
import { userRepository } from "../_repositories/user.repository";
import { createUserAbility } from "../_domain/user-ability";
import { AuthorizationError } from "@/shared/lib/errors";

type GetUser = {
  userId: UserId;
  session: SessionEntity;
};

export class GetUserServices {
  async exec({ userId, session }: GetUser): Promise<UserEntity> {
    const ability = createUserAbility(session).canGetUser(userId);
    if (!ability) {
      throw new AuthorizationError();
    }

    return await userRepository.getUserById(userId);
  }
}

export const getUserServices = new GetUserServices();
