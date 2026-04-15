import type { GlobalConfig } from "payload";

export const Hero: GlobalConfig = {
  slug: "hero",
  label: "Hero",
  admin: { group: "Conținut" },
  access: { read: () => true },
  fields: [
    { name: "eyebrow", type: "text", required: true },
    { name: "titleLead", type: "text", required: true },
    {
      name: "titleDisplay",
      type: "text",
      required: true,
      admin: { description: "Cuvântul accentuat (italic, verde)" },
    },
    { name: "titleTail", type: "text", required: true },
    { name: "subtitle", type: "textarea", required: true },
    {
      name: "primaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
    {
      name: "stats",
      type: "array",
      minRows: 1,
      maxRows: 3,
      fields: [
        { name: "value", type: "text", required: true },
        { name: "unit", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
