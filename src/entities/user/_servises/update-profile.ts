import { createProfileAbility } from "../_domain/user-ability";
import { AuthorizationError } from "@/shared/lib/errors";
import { profileRepository } from "../_repositories/profile";
import { SharedSession, UserId } from "@/kernel/domain/user";
import { Profile } from "../_domain/types";

type UpdateProfile = {
  userId: UserId;
  data: Partial<Profile>;
  session: SharedSession;
};

export class UpdateProfileServices {
  async exec({ userId, data, session }: UpdateProfile): Promise<Profile> {
    const ability = createProfileAbility(session).canUpdateProfile(userId);
    if (!ability) {
      throw new AuthorizationError();
    }

    return await profileRepository.update(data, userId);
  }
}

export const updateProfileServices = new UpdateProfileServices();
