import type { CollectionConfig } from "payload";

export const Cities: CollectionConfig = {
  slug: "cities",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "x", "y", "order"],
    group: "Conținut",
  },
  defaultSort: "order",
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "x",
      type: "number",
      required: true,
      admin: { description: "Coordonata X pe harta SVG (0–900)" },
    },
    {
      name: "y",
      type: "number",
      required: true,
      admin: { description: "Coordonata Y pe harta SVG (0–560)" },
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
