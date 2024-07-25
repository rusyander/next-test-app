import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().nullable().optional(),
  email: z.string(),
  image: z.string().nullable().optional(),
});
