import { z } from "zod";

const privateConfigSchema = z.object({
  GITHUB_ID: z.string().optional(),
  GITHUB_SECRET: z.string().optional(),

  // EMAIL_SERVER_USER: z.string().optional(),
  // EMAIL_SERVER_PASSWORD: z.string().optional(),
  // EMAIL_SERVER_HOST: z.string().optional(),
  // EMAIL_SERVER_PORT: z.number().optional(),
  // EMAIL_FROM: z.string().optional(),

  ADMIN_EMAILS: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
