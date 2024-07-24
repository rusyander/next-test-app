import { dbClient } from "@/shared/lib/db";
import { UserEntity, UserId } from "../_domain/types";

export class UserRepository {
  async createUser(user: UserEntity): Promise<UserEntity> {
    return await dbClient.user.create({
      data: user as any,
    });
  }

  async getUserById(userId: UserId): Promise<UserEntity> {
    return await dbClient.user.findUniqueOrThrow({
      where: { id: userId },
    });
  }
}

export const userRepository = new UserRepository();
