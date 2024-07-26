"use server";

import { profileSchema } from "@/entities/user/_domain/schema";
import { updateProfileServices } from "@/entities/user/_servises/update-profile";
import { getAppSessionStrictServer } from "@/kernel/lib/next-auth/server";
import { z } from "zod";

const propsSchema = z.object({
  userId: z.string(),
  data: profileSchema.partial(),
});

const resultSchema = z.object({
  profile: profileSchema,
});

export const updateProfileAction = async (
  props: z.infer<typeof propsSchema>,
) => {
  const { userId, data } = propsSchema.parse(props);
  const session = await getAppSessionStrictServer();

  const user = await updateProfileServices.exec({
    userId,
    data,
    session,
  });

  return resultSchema.parseAsync({
    profile: user,
  });
};
