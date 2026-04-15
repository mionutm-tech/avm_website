import type { CollectionConfig } from "payload";

export const Tiers: CollectionConfig = {
  slug: "tiers",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "price", "featured", "order"],
    group: "Conținut",
  },
  defaultSort: "order",
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "price", type: "text", required: true },
    { name: "period", type: "text", defaultValue: "" },
    {
      name: "perks",
      type: "array",
      required: true,
      minRows: 1,
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "cta", type: "text", required: true },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
