import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["drizzle-kit", "@payloadcms/drizzle"],
};

export default withPayload(config);
