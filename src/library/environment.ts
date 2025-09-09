import { z } from 'zod';

const schema = z.object({
  DOMAIN: z.url(),
  ANALYTICS: z.string(),
  API: z.url().optional(),
  TOKEN: z.string().optional(),
});

export const env = schema.parse({
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  ANALYTICS: process.env.NEXT_PUBLIC_ANALYTICS,
  API: process.env.API_URL,
  TOKEN: process.env.API_TOKEN,
});
