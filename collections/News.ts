import type { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "date", "order"],
    group: "Conținut",
  },
  defaultSort: "order",
  access: { read: () => true },
  fields: [
    { name: "date", type: "text", required: true, admin: { description: 'ex: "14 Apr 2026"' } },
    { name: "category", type: "text", required: true },
    { name: "title", type: "text", required: true },
    { name: "excerpt", type: "textarea", required: true },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
