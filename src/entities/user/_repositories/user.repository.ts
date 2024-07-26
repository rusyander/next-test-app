import { SharedUser, UserId } from "@/kernel/domain/user";
import { dbClient } from "@/shared/lib/db";

export class UserRepository {
  async createUser(user: SharedUser): Promise<SharedUser> {
    return await dbClient.user.create({
      data: user as any,
    });
  }

  async getUserById(userId: UserId): Promise<SharedUser> {
    return await dbClient.user.findUniqueOrThrow({
      where: { id: userId },
    });
  }
}

export const userRepository = new UserRepository();
