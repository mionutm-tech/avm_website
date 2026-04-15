import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { pushDevSchema } from "@payloadcms/drizzle";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Projects } from "./collections/Projects";
import { ImpactMetrics } from "./collections/ImpactMetrics";
import { Partners } from "./collections/Partners";
import { Cities } from "./collections/Cities";
import { Members } from "./collections/Members";
import { News } from "./collections/News";
import { Tiers } from "./collections/Tiers";

import { OrgSettings } from "./globals/OrgSettings";
import { Hero } from "./globals/Hero";
import { About } from "./globals/About";
import { Contact } from "./globals/Contact";

import { seed } from "./seed/seed";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — AVM-UI Admin",
    },
  },
  collections: [
    Users,
    Projects,
    ImpactMetrics,
    Partners,
    Cities,
    Members,
    News,
    Tiers,
  ],
  globals: [OrgSettings, Hero, About, Contact],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URL || process.env.DATABASE_URI,
    },
  }),
  sharp,
  onInit: async (payload) => {
    payload.logger.info("onInit: starting schema push");
    try {
      process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = "true";
      await pushDevSchema(payload.db as Parameters<typeof pushDevSchema>[0]);
      payload.logger.info("onInit: schema push OK");
    } catch (err) {
      payload.logger.error(
        { err: err instanceof Error ? { message: err.message, stack: err.stack } : err },
        "onInit: schema push FAILED"
      );
      return;
    }

    try {
      const { totalDocs } = await payload.count({ collection: "projects" });
      payload.logger.info(`onInit: projects count = ${totalDocs}`);
      if (totalDocs === 0) {
        await seed(payload);
        payload.logger.info("onInit: seed OK");
      }
    } catch (err) {
      payload.logger.error(
        { err: err instanceof Error ? { message: err.message, stack: err.stack } : err },
        "onInit: seed FAILED"
      );
    }
  },
});
