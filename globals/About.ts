import type { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  label: "Despre",
  admin: { group: "Conținut" },
  access: { read: () => true },
  fields: [
    { name: "eyebrow", type: "text", required: true },
    { name: "title", type: "text", required: true },
    { name: "body", type: "textarea", required: true },
    {
      name: "values",
      type: "array",
      minRows: 1,
      maxRows: 3,
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
  ],
};
