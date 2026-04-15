import type { CollectionConfig } from "payload";

export const Partners: CollectionConfig = {
  slug: "partners",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order"],
    group: "Conținut",
  },
  defaultSort: "order",
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
