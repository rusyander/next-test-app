"use server";

import { z } from "zod";
import { getAppSessionStrictServer } from "../../../kernel/lib/next-auth/server";
import { profileSchema } from "../_domain/schema";
import { getUSerServices } from "../_servises/get-user";

const propsSchema = z.object({
  userId: z.string(),
});

const resultSchema = z.object({
  profile: profileSchema,
});

export const getUserProfileAction = async (
  props: z.infer<typeof propsSchema>,
) => {
  const { userId } = propsSchema.parse(props);
  const session = await getAppSessionStrictServer();

  const user = await getUSerServices.exec({
    userId,
    session,
  });

  return resultSchema.parseAsync({
    profile: user,
  });
};
