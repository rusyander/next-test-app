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

  S3_ACCESS_KEY_ID: z.string(),
  S3_SECRET_ACCESS_KEY: z.string(),
  S3_IMAGES_BUCKET: z.string(),
  S3_ENDPOINT: z.string(),
  S3_REGION: z.string(),

  TEST_EMAIL_TOKEN: z.string().optional(),

  CONTENT_URL: z.string(),
  CONTENT_TOKEN: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
