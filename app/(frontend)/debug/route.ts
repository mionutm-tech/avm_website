import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { pushDevSchema } from "@payloadcms/drizzle";

export const dynamic = "force-dynamic";

export async function GET() {
  const results: Record<string, unknown> = {};

  results.env = {
    NODE_ENV: process.env.NODE_ENV,
    hasDATABASE_URL: !!process.env.DATABASE_URL,
    hasPAYLOAD_SECRET: !!process.env.PAYLOAD_SECRET,
    DATABASE_URL_prefix: process.env.DATABASE_URL?.slice(0, 30),
  };

  try {
    const payload = await getPayload({ config });
    results.payload = "initialized";

    try {
      process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = "true";
      await pushDevSchema(payload.db as Parameters<typeof pushDevSchema>[0]);
      results.pushDevSchema = "OK";
    } catch (err) {
      results.pushDevSchema = {
        message: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
        name: err instanceof Error ? err.name : undefined,
      };
    }

    try {
      const { totalDocs } = await payload.count({ collection: "projects" });
      results.projectsCount = totalDocs;
    } catch (err) {
      results.projectsCount = {
        message: err instanceof Error ? err.message : String(err),
      };
    }
  } catch (err) {
    results.getPayload = {
      message: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    };
  }

  return NextResponse.json(results, { status: 200 });
}
