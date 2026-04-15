import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["code", "title", "tag", "order"],
    group: "Conținut",
  },
  defaultSort: "order",
  access: { read: () => true },
  fields: [
    { name: "code", type: "text", required: true },
    { name: "title", type: "text", required: true },
    { name: "body", type: "textarea", required: true },
    { name: "tag", type: "text", required: true },
    {
      name: "icon",
      type: "select",
      required: true,
      defaultValue: "bike",
      options: [
        { label: "Bicicletă", value: "bike" },
        { label: "Fulger (EV)", value: "zap" },
        { label: "Compas", value: "compass" },
        { label: "Bază de date", value: "database" },
        { label: "Educație", value: "graduation" },
        { label: "Share", value: "share" },
      ],
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
