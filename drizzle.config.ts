import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://default:rlYi1Bb2hDIx@ep-rapid-waterfall-a41514cd.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
  tablesFilter: ["jafupycom_*"],
} satisfies Config;
