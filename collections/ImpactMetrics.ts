import type { CollectionConfig } from "payload";

export const ImpactMetrics: CollectionConfig = {
  slug: "impact-metrics",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "value", "suffix", "order"],
    group: "Conținut",
  },
  defaultSort: "order",
  access: { read: () => true },
  fields: [
    { name: "value", type: "number", required: true },
    { name: "suffix", type: "text", defaultValue: "" },
    { name: "label", type: "text", required: true },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
