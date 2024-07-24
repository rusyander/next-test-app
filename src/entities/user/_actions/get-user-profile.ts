"use server";

import { getUSerUseCase } from "../_use-cases/get-user";
import { z } from "zod";
import { getAppSessionStrictServer } from "../session.server";

const propsSchema = z.object({
  userId: z.string(),
});

const profileSchema = z.object({
  name: z.string().nullable().optional(),
  email: z.string(),
  image: z.string().nullable().optional(),
});

const resultSchema = z.object({
  profile: profileSchema,
});

export const getUserProfileAction = async (
  props: z.infer<typeof propsSchema>,
) => {
  const { userId } = propsSchema.parse(props);
  const session = await getAppSessionStrictServer();

  const user = await getUSerUseCase.exec({
    userId,
    session,
  });

  return resultSchema.parseAsync({
    profile: user,
  });
};
