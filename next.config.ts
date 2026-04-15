import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["drizzle-kit", "@payloadcms/drizzle"],
  outputFileTracingIncludes: {
    "/**/*": ["./node_modules/drizzle-kit/**/*"],
  },
};

export default withPayload(config);
