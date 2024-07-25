import { SessionEntity, UserId, Profile } from "../_domain/types";
import { createProfileAbility } from "../_domain/user-ability";
import { AuthorizationError } from "@/shared/lib/errors";
import { profileRepository } from "../_repositories/profile";

type UpdateProfile = {
  userId: UserId;
  data: Partial<Profile>;
  session: SessionEntity;
};

export class UpdateProfileUseCase {
  async exec({ userId, data, session }: UpdateProfile): Promise<Profile> {
    const ability = createProfileAbility(session).canUpdateProfile(userId);
    if (!ability) {
      throw new AuthorizationError();
    }

    return await profileRepository.update(data, userId);
  }
}

export const updateProfileUseCase = new UpdateProfileUseCase();
