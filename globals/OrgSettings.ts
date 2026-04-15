import type { GlobalConfig } from "payload";

export const OrgSettings: GlobalConfig = {
  slug: "org-settings",
  label: "Organizație",
  admin: { group: "Setări" },
  access: { read: () => true },
  fields: [
    { name: "shortName", type: "text", required: true },
    { name: "fullName", type: "text", required: true },
    { name: "tagline", type: "text", required: true },
    { name: "established", type: "number", required: true },
  ],
};
